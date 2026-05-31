
import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = ({ apiUrl, onRegistrationSuccess }) => {
  const [formData, setFormData] = useState({
    level: 'Level-1 (3 months)',
    gender: 'Male',
    institutionName: '',
    section: 'Combine',
    fullName: '',
    class: 'Class 9',
    guardianPhone: '',
    relationWithGuardian: '',
    studentPhone: '',
    termsAccepted: false
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      setMessage({ text: 'Please accept the terms and conditions', type: 'error' });
      return;
    }
    if (!image) {
      setMessage({ text: 'Please upload a student image', type: 'error' });
      return;
    }

    setLoading(true);
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });
    data.append('image', image);

    try {
      const response = await axios.post(`${apiUrl}/auth/register`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setMessage({ text: response.data.message, type: 'success' });
      // Reset form
      setFormData({
        level: 'Level-1 (3 months)',
        gender: 'Male',
        institutionName: '',
        section: 'Combine',
        fullName: '',
        class: 'Class 9',
        guardianPhone: '',
        relationWithGuardian: '',
        studentPhone: '',
        termsAccepted: false
      });
      setImage(null);
      setImagePreview(null);
      if (onRegistrationSuccess) onRegistrationSuccess();
    } catch (error) {
      const errMsg = error.response?.data?.message || 'Registration failed';
      setMessage({ text: errMsg, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">New Student Registration</h2>
      {message.text && (
        <div className={`mb-4 p-3 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Select Level*</label>
            <select name="level" value={formData.level} onChange={handleChange} className="w-full border rounded-lg px-3 py-2">
              <option>Level-1 (3 months)</option>
              <option>Level-2 (4 months)</option>
              <option>Level-3 (3 months)</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Gender*</label>
            <select name="gender" value={formData.gender} onChange={handleChange} className="w-full border rounded-lg px-3 py-2">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Institution Name*</label>
            <input type="text" name="institutionName" value={formData.institutionName} onChange={handleChange} required className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Section*</label>
            <select name="section" value={formData.section} onChange={handleChange} className="w-full border rounded-lg px-3 py-2">
              <option>Combine</option>
              <option>Physics</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name*</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Class*</label>
            <select name="class" value={formData.class} onChange={handleChange} className="w-full border rounded-lg px-3 py-2">
              <option>Class 9</option>
              <option>Class 10</option>
              <option>Class 11</option>
              <option>Class 12</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Guardian Phone Number*</label>
            <input type="tel" name="guardianPhone" value={formData.guardianPhone} onChange={handleChange} required className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Relation with Guardian*</label>
            <input type="text" name="relationWithGuardian" value={formData.relationWithGuardian} onChange={handleChange} required className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Student's Own Phone Number (Unique)*</label>
            <input type="tel" name="studentPhone" value={formData.studentPhone} onChange={handleChange} required className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Upload Image*</label>
            <input type="file" accept="image/*" onChange={handleImageChange} required className="w-full" />
            {imagePreview && <img src={imagePreview} alt="Preview" className="mt-2 h-20 w-20 object-cover rounded" />}
          </div>
        </div>
        <div className="flex items-center">
          <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} className="h-4 w-4 text-blue-600" />
          <label className="ml-2 text-gray-700">I accept the terms and conditions*</label>
        </div>
        <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200 disabled:opacity-50">
          {loading ? 'Registering...' : 'Register Now'}
        </button>
      </form>
    </section>
  );
};

export default RegistrationForm;