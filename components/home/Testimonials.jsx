import React from 'react'
import Testimonial from '@/components/common/slider/Testimonial';

export default function Testimonials() {
    const testimonials = [
      {
        quote:
          "Remote Office has been an unconventionally articulated one-stop remote service station for me. I have worked on Data Processing with the team and I got seamless English speaking team members with accurate results. Their team leaders even make the job easier to track & follow up.",
        name: "Akhter Ahmed",
        designation: "Former President, New Emerging Market, Microsoft",
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        quote:
          "We partnered with Remote Office to step up our email campaigning and lead generation team. They have proven to be highly engaging and professional, always showing great interest in getting to know Brang and our requirements. They were welcoming of any changes and adaptable to feedback, which allowed our campaign to foster. We would highly recommend Remote Office to any business who is looking to partner with a passionate marketing Team!!",
        name: "Tracy Stone",
        designation: "Sales Manager, BRANG – Think Delivery. Think Brang",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        quote:
          "In a rapidly growing sector with dynamic and fast paced needs emerging, it's been critical to our success to be able to adapt and scale our modern healthtech platform and this has required continuous recruitment in the areas of CX Design, Development & Support as we expand our teams to meet the needs of our customers. To this end Remote Office has become a trusted partner for the end-to-end experience in accessing global talents for hiring and supporting skilled team members. They're part of the team.",
        name: "Yianni Serpanos",
        designation: "CEO & Founder, Coreplus",
        src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ];
    return (
        <div className='w-full h-full'>
            <div className='w-full h-full max-w-8xl mx-auto px-4 md:px-8 lg:px-20'>
                <Testimonial testimonials={testimonials} />
            </div>
        </div>
    );
}