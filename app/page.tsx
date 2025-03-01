'use client';
// import { useState } from 'react';
import ContactComponent from './contact/page';
export default function ContactPage() {
  // const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // const handleChange = (e:any) => {
  //   setFormData({ ...formData, [e.target.id]: e.target.value });
  // };

  // const handleSubmit = (e:any) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  // };

  return (
    <>
    <ContactComponent />
    </>
  );
}
