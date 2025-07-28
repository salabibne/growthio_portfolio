// pages/ErrorPage.tsx
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { FrownOutlined } from '@ant-design/icons';

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-xl text-center">
        <FrownOutlined className="text-[100px] text-blue-500 mb-6 animate-bounce" />
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">404 - Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">
          The page you’re looking for doesn’t exist or might have been moved.
        </p>
        <Link to="/">
          <Button type="primary" size="large" className="px-6 py-2 text-base font-medium rounded-xl shadow-md">
            Go to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
