import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#323232]">Daxil ol</h2>
          <p className="mt-2 text-sm text-gray-500">
            Hesabınız yoxdur? <span className="text-[#ff003c] font-bold cursor-pointer hover:underline">Qeydiyyatdan keçin</span>
          </p>
        </div>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon nömrəsi və ya E-mail</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#ff003c] focus:ring-1 focus:ring-[#ff003c] outline-none transition-all"
              placeholder="0XX XXX XX XX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-semibold text-gray-700">Şifrə</label>
              <span className="text-xs text-[#ff003c] font-medium cursor-pointer hover:underline">Şifrəni unutmusunuz?</span>
            </div>
            <input
              type="password"
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#ff003c] focus:ring-1 focus:ring-[#ff003c] outline-none transition-all"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 text-[#ff003c] border-gray-300 rounded focus:ring-[#ff003c]"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Məni xatırla</label>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-base font-bold text-white bg-[#ff003c] hover:bg-[#d40032] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff003c] transition-all transform active:scale-[0.98]"
          >
            Daxil ol
          </button>
        </form>

        <div className="mt-8 text-center space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-400 font-medium">və ya</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
              <span className="text-sm font-semibold">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-4 h-4" />
              <span className="text-sm font-semibold">Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
