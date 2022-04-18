import React from 'react'

const About = () => {
  return (
    <div className=' text-center border p-8 bg-blue-100 w-full'>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

        <div>
          <h3 className='order-2 text-xl mb-3'>আমি মোঃ মাজহারুল ইসলাম সোহাগ</h3>
          <p>আমি ছোট খাটো একটি চাকরি করি। অফিসে সময় দিয়ে এই কোর্সটি করা আমার জন্য খুবই কষ্ট হচ্ছে। তবুও করছি। আশা যে, কোর্সটি শেষে ভাল একটি চাকরি পাব। আমার সংসারের সদস্য সংখ্যা ৮ জন। আমি যে ইনকাম করি তা দিয়ে বর্তমান বাজারে সংসার চালানো খুবই কষ্ঠসাধ্য। তাই আশা করছি এদিন কষ্টের চিরদিন থাকবেনা ইনশাআল্লাহ</p>
        </div>

        <div>
          <h1>Village: Vhuighor.</h1>
          <h1>City: Narayanganj</h1>
          <h1>Phone: +8801812060163</h1>
          <h1>Email: mislamsohag@gmail.com</h1>
        </div>

        <div>
          <img className='order-1 img-fluid w-100' src="https://media-exp1.licdn.com/dms/image/C5103AQG1PmsKzSWoJQ/profile-displayphoto-shrink_800_800/0/1517346988644?e=1655942400&v=beta&t=wGYQwQSDEMblnhqw9Rvndj1tCXnc7ES6C2zrjzZ8UeY" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
