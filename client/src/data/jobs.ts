export interface Job {
  id: string;
  title: string;
  titleThai?: string;
  company: string;
  companyLogo?: string;
  location: string;
  datePosted: string;
  employmentType: string;
  categories: string[];
  salary?: string;
  description: string;
  requirements: string[];
  isHot?: boolean;
  workType?: string;
  experience?: string;
  education?: string;
  skills?: string[];
  benefits?: string[];
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    titleThai: "นักพัฒนาเว็บไซต์",
    company: "Tech Solutions Co.",
    companyLogo: "https://via.placeholder.com/150x150?text=Tech",
    location: "วังสามหมอ",
    datePosted: "2024-01-15",
    employmentType: "Full-time",
    categories: ["Technology", "Development"],
    salary: "30,000 - 45,000 บาท",
    description: "พัฒนาและดูแลเว็บไซต์ด้านหน้าสำหรับธุรกิจท่องเที่ยว",
    requirements: [
      "ปริญญาตรี สาขาวิทยาการคอมพิวเตอร์หรือที่เกี่ยวข้อง",
      "มีประสบการณ์ React และ TypeScript",
      "เข้าใจ Responsive Design"
    ],
    isHot: true,
    workType: "On-site",
    experience: "1-3 ปี",
    education: "ปริญญาตรี",
    skills: ["React", "TypeScript", "CSS", "JavaScript"],
    benefits: ["ประกันสุขภาพ", "โบนัสประจำปี", "วันหยุดพักผ่อน"]
  },
  {
    id: "2",
    title: "Tour Guide",
    titleThai: "ไกด์นำเที่ยว",
    company: "Wang Sam Mo Tourism",
    companyLogo: "https://via.placeholder.com/150x150?text=Tourism",
    location: "วังสามหมอ",
    datePosted: "2024-01-14",
    employmentType: "Full-time",
    categories: ["Tourism", "Service"],
    salary: "18,000 - 25,000 บาท",
    description: "นำเที่ยวและให้ข้อมูลแก่นักท่องเที่ยวที่เข้าชมวังสามหมอ",
    requirements: [
      "จบการศึกษาระดับมัธยมศึกษาตอนปลายขึ้นไป",
      "มีใบอนุญาตไกด์นำเที่ยว",
      "สามารถสื่อสารภาษาอังกฤษได้"
    ],
    isHot: true,
    workType: "On-site",
    experience: "0-2 ปี",
    education: "มัธยมศึกษาตอนปลาย",
    skills: ["ภาษาอังกฤษ", "การสื่อสาร", "ความรู้ประวัติศาสตร์"],
    benefits: ["ค่าคอมมิชชั่น", "การฝึกอบรม", "อุปกรณ์การทำงาน"]
  },
  {
    id: "3",
    title: "Hotel Receptionist",
    titleThai: "พนักงานต้อนรับโรงแรม",
    company: "Royal Heritage Hotel",
    companyLogo: "https://via.placeholder.com/150x150?text=Hotel",
    location: "วังสามหมอ",
    datePosted: "2024-01-13",
    employmentType: "Full-time",
    categories: ["Hospitality", "Service"],
    salary: "20,000 - 28,000 บาท",
    description: "ให้บริการต้อนรับและดูแลแขกในโรงแรม",
    requirements: [
      "ปริญญาตรี สาขาการโรงแรม หรือที่เกี่ยวข้อง",
      "มีประสบการณ์ในธุรกิจโรงแรม",
      "สามารถสื่อสารภาษาอังกฤษได้ดี"
    ],
    isHot: false,
    workType: "On-site",
    experience: "1-2 ปี",
    education: "ปริญญาตรี",
    skills: ["Customer Service", "ภาษาอังกฤษ", "Computer Skills"],
    benefits: ["ประกันสุขภาพ", "ชุดยูนิฟอร์ม", "อาหารฟรี"]
  },
  {
    id: "4",
    title: "Restaurant Server",
    titleThai: "พนักงานเสิร์ฟอาหาร",
    company: "Thai Heritage Restaurant",
    companyLogo: "https://via.placeholder.com/150x150?text=Restaurant",
    location: "วังสามหมอ",
    datePosted: "2024-01-12",
    employmentType: "Part-time",
    categories: ["Food", "Service"],
    salary: "300 - 400 บาท/วัน",
    description: "เสิร์ฟอาหารและเครื่องดื่มให้แก่ลูกค้า",
    requirements: [
      "การศึกษาระดับมัธยมศึกษาตอนปลายขึ้นไป",
      "มีประสบการณ์ในร้านอาหาร",
      "บุคลิกดี มีมนุษยสัมพันธ์ที่ดี"
    ],
    isHot: false,
    workType: "On-site",
    experience: "0-1 ปี",
    education: "มัธยมศึกษาตอนปลาย",
    skills: ["Customer Service", "การจำรายการอาหาร", "ความรวดเร็ว"],
    benefits: ["Tips", "อาหารฟรี", "เวลาทำงานยืดหยุ่น"]
  },
  {
    id: "5",
    title: "Museum Curator",
    titleThai: "ผู้ดูแลพิพิธภัณฑ์",
    company: "Wang Sam Mo Museum",
    companyLogo: "https://via.placeholder.com/150x150?text=Museum",
    location: "วังสามหมอ",
    datePosted: "2024-01-11",
    employmentType: "Full-time",
    categories: ["Culture", "Education"],
    salary: "25,000 - 35,000 บาท",
    description: "ดูแลและจัดการคอลเลกชันในพิพิธภัณฑ์",
    requirements: [
      "ปริญญาโท สาขาประวัติศาสตร์ หรือศิลปกรรม",
      "มีประสบการณ์ในพิพิธภัณฑ์",
      "ความรู้เกี่ยวกับประวัติศาสตร์ไทย"
    ],
    isHot: true,
    workType: "On-site",
    experience: "3-5 ปี",
    education: "ปริญญาโท",
    skills: ["Research", "Documentation", "Public Speaking"],
    benefits: ["ประกันสุขภาพ", "การฝึกอบรม", "ทุนการศึกษา"]
  },
  {
    id: "6",
    title: "Digital Marketing Specialist",
    titleThai: "นักการตลาดดิจิทัล",
    company: "Tourism Promotion Board",
    companyLogo: "https://via.placeholder.com/150x150?text=Marketing",
    location: "วังสามหมอ",
    datePosted: "2024-01-10",
    employmentType: "Full-time",
    categories: ["Marketing", "Technology"],
    salary: "28,000 - 40,000 บาท",
    description: "สร้างแคมเปญการตลาดออนไลน์เพื่อส่งเสริมการท่องเที่ยว",
    requirements: [
      "ปริญญาตรี สาขาการตลาด หรือสื่อสารมวลชน",
      "มีประสบการณ์ Digital Marketing",
      "เข้าใจ Social Media และ SEO"
    ],
    isHot: false,
    workType: "Hybrid",
    experience: "2-4 ปี",
    education: "ปริญญาตรี",
    skills: ["Social Media", "SEO", "Content Creation", "Analytics"],
    benefits: ["ทำงานจากบ้านได้", "โบนัสผลงาน", "ค่าอินเทอร์เน็ต"]
  }
];