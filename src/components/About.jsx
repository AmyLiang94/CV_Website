import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 font-signature'>About</p>
        </div>
        <p className='text-xl md:mt-20 sm:mt-1'>
        I hold an MSc in Computer Science from Newcastle University. My expertise encompasses a variety of programming languages, from Java to SQL, HTML, CSS, JavaScript, and TypeScript. I'm good in using a range of essential technology tools and frameworks such as React, Vue.js, Spring Boot, Git, Firebase, and Node.js. My experience extends to working within both Agile and Waterfall development methodologies.
        </p>

        <br />

        <p className='text-xl md:mt-20 sm:mt-1'>
        In addition to my academic achievements, I've pursued various certifications from Skyscanner, Wells Fargo, Google, and Microsoft, reflecting my dedication to continuous learning and professional growth.
        </p>

        <br />

        <p className='text-xl md:mt-20 sm:mt-1'>
        Beyond my technical skills, I have diverse experiences. I've engaged with visitors as an Open Day Tour Guide at Newcastle University, where I showcased my adaptability and provided excellent customer service. I've also collaborated with international commercial teams at Coface, refining my teamwork and attention-to-detail skills. Furthermore, my background includes working as a social worker and case manager, emphasizing inclusive communication, negotiation, and event coordination.
        </p>


      </div>
    </div>
  )
}

export default About