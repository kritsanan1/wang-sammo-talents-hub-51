import React from 'react';
import { Link } from 'wouter';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-wang-blue text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold">
                W
              </div>
              <span className="font-prompt text-xl font-bold">
                วังสามหมอ Jobs
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              แหล่งรวมตำแหน่งงานในท้องถิ่นสำหรับผู้ที่ต้องการทำงานในภาคการท่องเที่ยวและการบริการ
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-prompt font-semibold">ลิงก์ด่วน</h3>
            <div className="space-y-2">
              <Link to="/" className="text-gray-300 hover:text-white text-sm block">
                หน้าแรก
              </Link>
              <Link to="/jobs" className="text-gray-300 hover:text-white text-sm block">
                ค้นหางาน
              </Link>
              <Link to="/applications" className="text-gray-300 hover:text-white text-sm block">
                ติดตามใบสมัคร
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-prompt font-semibold">หมวดหมู่งาน</h3>
            <div className="space-y-2">
              <Link to="/jobs?category=Tourism" className="text-gray-300 hover:text-white text-sm block">
                ท่องเที่ยว
              </Link>
              <Link to="/jobs?category=Hospitality" className="text-gray-300 hover:text-white text-sm block">
                การโรงแรม
              </Link>
              <Link to="/jobs?category=Food" className="text-gray-300 hover:text-white text-sm block">
                อาหารและเครื่องดื่ม
              </Link>
              <Link to="/jobs?category=Technology" className="text-gray-300 hover:text-white text-sm block">
                เทคโนโลยี
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-prompt font-semibold">ติดต่อเรา</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <MapPin className="h-4 w-4" />
                <span>วังสามหมอ อุทัยธานี</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Phone className="h-4 w-4" />
                <span>02-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Mail className="h-4 w-4" />
                <span>info@wangsammo-jobs.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 วังสามหมอ Jobs. สงวนลิขสิทธิ์ทั้งหมด.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                นโยบายความเป็นส่วนตัว
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                เงื่อนไขการใช้งาน
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;