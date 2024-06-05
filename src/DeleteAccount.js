import React, { useState } from 'react';

const DeleteAccount = () => {
  const [reason, setReason] = useState('');
  const [comments, setComments] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reason) {
      setError('Please select a reason');
      setSuccess('');
    } else {
      setError('');
      setSuccess('Account deleted successfully');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Delete Your Account</h2>
      <p className="text-gray-500 mb-6">We're sorry to see you go. It would be great if we could know the reason behind.</p>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      {success && <div className="mb-4 text-green-500">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Reason</label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="reason"
                value="privacy"
                className="mr-2"
                onChange={(e) => setReason(e.target.value)}
              />
              I have privacy concerns
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="reason"
                value="not useful"
                className="mr-2"
                onChange={(e) => setReason(e.target.value)}
              />
              I no longer find this useful
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="reason"
                value="irrelevant emails"
                className="mr-2"
                onChange={(e) => setReason(e.target.value)}
              />
              I'm receiving irrelevant email contents
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="reason"
                value="too many emails"
                className="mr-2"
                onChange={(e) => setReason(e.target.value)}
              />
              I'm getting too many emails
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="reason"
                value="others"
                className="mr-2"
                onChange={(e) => setReason(e.target.value)}
              />
              Others
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Comments</label>
          <textarea
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Your comments (Optional)"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DeleteAccount;
