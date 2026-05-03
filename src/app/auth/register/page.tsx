"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { GraduationCap, Upload, Loader2, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

// Define the shape of our form data
interface SchoolFormData {
  schoolName: string;
  principalName: string;
  principalEmail: string;
  contactPhone: string;
  website: string;
  registrationNumber: string;
  establishedYear: string;
  schoolType: 'public' | 'private' | 'charter';
  addressLine1: string;
  city: string;
  state: string;
  postcode: string;
  password: string;
  totalStudents: string;
}

const EnrollSchool = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // State for text inputs
  const [formData, setFormData] = useState<SchoolFormData>({
    schoolName: "",
    principalName: "",
    principalEmail: "",
    contactPhone: "",
    website: "",
    registrationNumber: "",
    establishedYear: "2015",
    schoolType: "public",
    addressLine1: "",
    city: "Sialkot",
    state: "Punjab",
    postcode: "51310",
    password: "",
    totalStudents: ""
  });

  // State for files
  const [files, setFiles] = useState<{
    logo: File | null;
    registrationCertificate: File | null;
    noc: File | null;
  }>({
    logo: null,
    registrationCertificate: null,
    noc: null
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const { name } = e.target;
      setFiles(prev => ({ ...prev, [name]: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Use FormData for multi-part/form-data (required for files)
    const data = new FormData();
    
    // Append all text fields
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // Append files
    if (files.logo) data.append('logo', files.logo);
    if (files.registrationCertificate) data.append('registrationCertificate', files.registrationCertificate);
    if (files.noc) data.append('noc', files.noc);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/school/create`, {
        method: 'POST',
        body: data, // No headers needed, browser sets Content-Type automatically for FormData
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        const err = await response.json();
        alert(`Error: ${err.message || 'Registration failed'}`);
      }
    } catch (error) {
      console.error("Connection Error:", error);
      alert("Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md border border-emerald-100">
          <CheckCircle2 size={80} className="text-emerald-500 mx-auto mb-6" />
          <h2 className="text-3xl font-black mb-2">School Registered!</h2>
          <p className="text-slate-500 mb-8">Your application is being reviewed. Please check your email for the next steps.</p>
          <Link href="/" className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold block">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-emerald-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap size={32} />
            <h1 className="text-2xl font-bold">Enroll Your Institution</h1>
          </div>
          <p className="text-emerald-100 opacity-90">Fill in the details to create your school management account.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 grid md:grid-cols-2 gap-6">
          {/* Section 1: Basic Info */}
          <div className="md:col-span-2 border-b pb-2 mb-2">
            <h3 className="font-bold text-slate-800">Basic Information</h3>
          </div>
          
          <InputGroup label="School Name" name="schoolName" placeholder="e.g. My Awesome School" onChange={handleInputChange} required />
          <InputGroup label="Principal Name" name="principalName" placeholder="John Doe" onChange={handleInputChange} required />
          <InputGroup label="Principal Email" name="principalEmail" type="email" placeholder="principal@school.edu" onChange={handleInputChange} required />
          <InputGroup label="Contact Phone" name="contactPhone" placeholder="03001234567" onChange={handleInputChange} required />
          
          {/* Section 2: Registration Details */}
          <div className="md:col-span-2 border-b pb-2 mt-4 mb-2">
            <h3 className="font-bold text-slate-800">Academic & Legal</h3>
          </div>
          
          <InputGroup label="Registration Number" name="registrationNumber" placeholder="REG-2026-001" onChange={handleInputChange} required />
          <InputGroup label="Website" name="website" type="url" placeholder="https://myschool.edu.pk" onChange={handleInputChange} />
          
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-slate-600">School Type</label>
            <select 
              name="schoolType" 
              onChange={handleInputChange}
              className="p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>

          <InputGroup label="Total Students" name="totalStudents" type="number" placeholder="1200" onChange={handleInputChange} required />

          {/* Section 3: Location */}
          <div className="md:col-span-2 border-b pb-2 mt-4 mb-2">
            <h3 className="font-bold text-slate-800">Address & Security</h3>
          </div>

          <div className="md:col-span-2">
            <InputGroup label="Address Line 1" name="addressLine1" placeholder="Street 123, ABC Town" onChange={handleInputChange} required />
          </div>

          <InputGroup label="City" name="city" value={formData.city} onChange={handleInputChange} required />
          <InputGroup label="Postcode" name="postcode" value={formData.postcode} onChange={handleInputChange} required />
          <InputGroup label="Password" name="password" type="password" placeholder="••••••••" onChange={handleInputChange} required />

          {/* Section 4: File Uploads */}
          <div className="md:col-span-2 border-b pb-2 mt-4 mb-2">
            <h3 className="font-bold text-slate-800">Required Documents (Images/PDF)</h3>
          </div>

          <FileInput label="School Logo" name="logo" onChange={handleFileChange} />
          <FileInput label="Registration Certificate" name="registrationCertificate" onChange={handleFileChange} />
          <div className="md:col-span-2">
            <FileInput label="NOC Document" name="noc" onChange={handleFileChange} />
          </div>

          <div className="md:col-span-2 mt-8">
            <button 
              disabled={loading}
              className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition shadow-lg flex items-center justify-center gap-2 disabled:bg-slate-300"
            >
              {loading ? <Loader2 className="animate-spin" /> : "Complete Enrollment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// --- Helper Components for the Form ---

const InputGroup = ({ label, name, type = "text", ...props }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-bold text-slate-600">{label}</label>
    <input 
      name={name}
      type={type}
      className="p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition"
      {...props}
    />
  </div>
);

const FileInput = ({ label, name, onChange }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-bold text-slate-600">{label}</label>
    <div className="relative border-2 border-dashed border-slate-200 p-4 rounded-xl hover:bg-slate-50 transition cursor-pointer">
      <input 
        type="file" 
        name={name} 
        onChange={onChange}
        className="absolute inset-0 opacity-0 cursor-pointer"
        accept="image/*,.pdf"
      />
      <div className="flex items-center gap-3 text-slate-400">
        <Upload size={20} />
        <span className="text-sm">Click to upload {label}</span>
      </div>
    </div>
  </div>
);

export default EnrollSchool;