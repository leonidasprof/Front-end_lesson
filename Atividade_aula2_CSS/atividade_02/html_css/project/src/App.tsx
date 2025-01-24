import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gradient-to-b from-[#1a2942] to-[#161e2d] rounded-xl overflow-hidden shadow-2xl">
        {/* Top Section */}
        <div className="bg-white p-6">
          <div className="flex items-center gap-6">
            <img
              src="https://passport-photo.online/images/cms/vule_img_87f7dfa5d6.webp?quality=80&format=webp&width=1920?auto=format&fit=crop&q=80&w=200&h=200"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-[#00b5b8]"
            />
            <div>
              <h1 className="text-2xl font-bold text-[#1a2942]">Leônidas Leandro</h1>
              <p className="text-sm text-gray-600">Prof Tecnologias Aplicadas</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3 text-white">
            <Phone className="w-5 h-5 text-[#00b5b8]" />
            <span>(81) 98291-1207</span>
          </div>
          
          <div className="flex items-center gap-3 text-white">
            <Mail className="w-5 h-5 text-[#00b5b8]" />
            <span>lls@cesar.school</span>
          </div>
          
          <div className="flex items-center gap-3 text-white">
            <MapPin className="w-5 h-5 text-[#00b5b8]" />
            <div>
              <p>Rua Desembargador João Paes, 1007, apto, 1602</p>
              <p>Boa Viagem, Recife-PE</p>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="h-2 bg-[#00b5b8]" />
      </div>
    </div>
  );
}

export default App;