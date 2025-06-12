import React, { useState } from 'react';
import classes from './Contact.module.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };
    let isValid = true;

    // 名前のバリデーション
    if (!formData.name.trim()) {
      newErrors.name = 'お名前は必須です。';
      isValid = false;
    } else if (formData.name.length > 30) {
      newErrors.name = 'お名前は30文字以内で入力してください';
      isValid = false;
    }

    // メールアドレスのバリデーション
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスは必須です。';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
      isValid = false;
    }

    // 本文のバリデーション
    if (!formData.message.trim()) {
      newErrors.message = '本文は必須です。';
      isValid = false;
    } else if (formData.message.length > 500) {
      newErrors.message = '本文は500文字以内で入力してください';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // 入力時のバリデーション
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // ここにAPI呼び出しを追加予定
      console.log('送信されたデータ:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('送信エラー:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>問合わせフォーム</h1>
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
            maxLength={30}
            className={classes.input}
          />
          {errors.name && <p className={classes.errorText}>{errors.name}</p>}
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
          {errors.email && <p className={classes.errorText}>{errors.email}</p>}
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="message" className={classes.label}>本文</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            maxLength={500}
            className={classes.textarea}
            rows="5"
          />
          {errors.message && <p className={classes.errorText}>{errors.message}</p>}
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