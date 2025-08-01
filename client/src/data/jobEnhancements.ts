// Enhanced job data with additional fields for better job detail pages
export interface EnhancedJobData {
  workType?: string;
  experience?: string;
  education?: string;
  skills?: string[];
  benefits?: string[];
  companySize?: string;
  industry?: string;
  companyDescription?: string;
  applicationDeadline?: string;
  requiredLanguages?: string[];
  workingHours?: string;
  probationPeriod?: string;
  startDate?: string;
}

export const jobEnhancements: Record<string, EnhancedJobData> = {
  '1': {
    workType: 'Remote/Hybrid',
    experience: '2-4 ปี',
    education: 'ปริญญาตรี สาขาคอมพิวเตอร์หรือที่เกี่ยวข้อง',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Git'],
    benefits: [
      'ประกันสุขภาพครอบครัว',
      'โบนัสประจำปี 2-4 เดือน',
      'วันลาพักผ่อน 15 วัน/ปี',
      'เบี้ยเลี้ยงอาหาร',
      'ค่าเดินทาง',
      'โอกาสฝึกอบรมต่างประเทศ'
    ],
    companySize: '201-500 คน',
    industry: 'เทคโนโลยีสารสนเทศ',
    applicationDeadline: '2024-02-15',
    requiredLanguages: ['ไทย', 'อังกฤษ (อ่าน-เขียน)'],
    workingHours: '09:00-18:00 น.',
    probationPeriod: '4 เดือน',
    startDate: 'ทันที'
  },
  '2': {
    workType: 'On-site',
    experience: '1-3 ปี',
    education: 'ปริญญาตรี สาขาออกแบบหรือที่เกี่ยวข้อง',
    skills: ['Figma', 'Adobe Creative Suite', 'Sketch', 'Prototyping', 'User Research'],
    benefits: [
      'ประกันสุขภาพ',
      'โบนัสตามผลงาน',
      'วันลาพักผ่อน 12 วัน/ปี',
      'ค่าอาหารกลางวัน',
      'Creative workspace'
    ],
    companySize: '51-200 คน',
    industry: 'สื่อและโฆษณา',
    applicationDeadline: '2024-02-20',
    requiredLanguages: ['ไทย', 'อังกฤษ (พื้นฐาน)'],
    workingHours: '09:30-18:30 น.',
    probationPeriod: '3 เดือน',
    startDate: 'ภายใน 2 สัปดาห์'
  },
  '3': {
    workType: 'Hybrid',
    experience: '3-5 ปี',
    education: 'ปริญญาตรี สาขาคอมพิวเตอร์หรือวิศวกรรม',
    skills: ['Node.js', 'React', 'Python', 'Docker', 'AWS', 'MongoDB'],
    benefits: [
      'ประกันสุขภาพและทันตกรรม',
      'โบนัสประจำปี 3-6 เดือน',
      'Stock Options',
      'วันลาพักผ่อน 18 วัน/ปี',
      'Flexible working hours',
      'Learning budget'
    ],
    companySize: '11-50 คน',
    industry: 'สตาร์ทอัพเทคโนโลยี',
    applicationDeadline: '2024-02-10',
    requiredLanguages: ['ไทย', 'อังกฤษ (คล่อง)'],
    workingHours: 'Flexible (Core hours: 10:00-16:00)',
    probationPeriod: '6 เดือน',
    startDate: 'ทันที'
  }
};

export const getEnhancedJobData = (jobId: string): EnhancedJobData => {
  return jobEnhancements[jobId] || {
    workType: 'On-site',
    experience: '1-3 ปี',
    education: 'ปริญญาตรี',
    skills: ['มีประสบการณ์ที่เกี่ยวข้อง'],
    benefits: [
      'ประกันสุขภาพ',
      'โบนัสประจำปี',
      'วันหยุดพักผ่อน',
      'โอกาสเติบโตในสายอาชีพ'
    ],
    companySize: '101-500 คน',
    industry: 'ธุรกิจทั่วไป',
    requiredLanguages: ['ไทย'],
    workingHours: '09:00-18:00 น.',
    probationPeriod: '4 เดือน',
    startDate: 'ตามที่ตกลง'
  };
};