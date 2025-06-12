import React, { useState } from 'react';
import classes from './Contact.module.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // ここにAPI呼び出しを追加予定
      console.log('送信されたデータ:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' }); // フォームをリセット
    } catch (error) {
      console.error('送信エラー:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>お問い合わせ</h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.formGroup}>
          <label htmlFor="name" className={classes.label}>お名前</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={classes.input}
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="email" className={classes.label}>メールアドレス</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={classes.input}
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="message" className={classes.label}>お問い合わせ内容</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={classes.textarea}
            rows="5"
          />
        </div>

        <button 
          type="submit" 
          className={classes.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? '送信中...' : '送信する'}
        </button>

        {submitStatus === 'success' && (
          <p className={classes.successMessage}>
            お問い合わせを受け付けました。
          </p>
        )}

        {submitStatus === 'error' && (
          <p className={classes.errorMessage}>
            送信に失敗しました。時間をおいて再度お試しください。
          </p>
        )}
      </form>
    </div>
  );
}; 