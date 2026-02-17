
import React from 'react';
import { motion } from 'framer-motion';

const CourseList: React.FC = () => {
  const courses = [
    { title: 'Web Development', level: 'Beginner', icon: '💻', color: 'blue' },
    { title: 'Digital Marketing', level: 'Intermediate', icon: '📈', color: 'orange' },
    { title: 'Graphic Design', level: 'Beginner', icon: '🎨', color: 'blue' },
    { title: 'E-commerce', level: 'Expert', icon: '🛒', color: 'orange' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-bold uppercase tracking-widest text-xs mb-4">Our Curriculum</h2>
          <h3 className="text-4xl font-black text-brand-dark">Practical <span className="text-brand-orange">Courses</span></h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 group transition-all"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{course.icon}</div>
              <h4 className="text-xl font-black text-brand-dark mb-2">{course.title}</h4>
              <p className="text-xs font-black uppercase tracking-widest text-brand-blue mb-8">{course.level} Level</p>
              <button className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${
                course.color === 'blue' ? 'bg-brand-blue text-white hover:bg-brand-dark' : 'bg-brand-orange text-white hover:bg-brand-dark'
              }`}>
                Enroll Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseList;
