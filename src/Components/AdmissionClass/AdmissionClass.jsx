import React from 'react'

const AdmissionClass = () => {
  return (
    <>
        <div className='pt-10 pb-24'>
            <div className='max-w-screen-xl mx-auto'>
                <h3 className="text-3xl font-semibold pb-6 leading-snug">এডমিশনের ক্লাসগুলো টেন মিনিট স্কুলে কেমন হয়, দেখে নাও</h3>


                <div className='flex justify-between'>
                  
                  <div className="order-2 border border-gray-200 w-[40%] rounded-xl">
                      <ul className="flex flex-col flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                          <li className=" border-b-2 border-gray-200 " role="presentation">
                              <button className=" w-full p-4 rounded-t-lg flex gap-3 items-center" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                <img className='h-11 rounded' src="/customAssets/tabImage02.jpg" alt="tabImage02" />
                                <div className='text-left'>
                                  <h5 className='text-xs font-medium text-[#111827] md:truncate md:text-sm md:text-[#4B5563]'>ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স ২০২৩</h5>
                                  <span className='hidden text-xs text-gray-600 md:block'>Course Trailer</span>
                                </div>
                              </button>
                          </li>
                          <li className=" border-b-2 border-gray-200 " role="presentation">
                              <button className="w-full p-4 rounded-t-lg flex gap-3 items-center" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">
                                <img className='h-11 rounded' src="/customAssets/tabImage.jpg" alt="tabImage" />
                                <div className='text-left'>
                                  <h5 className='text-xs font-medium text-[#111827] md:truncate md:text-sm md:text-[#4B5563]'>ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স ২০২৩</h5>
                                  <span className='hidden text-xs text-gray-600 md:block'>Course Trailer</span>
                                </div>
                              </button>
                          </li>
                          <li className="border-b-2 border-gray-200 " role="presentation">
                              <button className="w-full p-4 rounded-t-lg flex gap-3 items-center " id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">
                                <img className='h-11 rounded' src="/customAssets/tabImage02.jpg" alt="tabImage02" />
                                <div className='text-left'>
                                  <h5 className='text-xs font-medium text-[#111827] md:truncate md:text-sm md:text-[#4B5563]'>ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স ২০২৩</h5>
                                  <span className='hidden text-xs text-gray-600 md:block'>Course Trailer</span>
                                </div>
                              </button>
                          </li>
                          <li role="presentation">
                              <button className="w-full p-4 rounded-t-lg flex gap-3 items-center " id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">
                                <img className='h-11 rounded' src="/customAssets/tabImage.jpg" alt="tabImage" />
                                <div className='text-left'>
                                  <h5 className='text-xs font-medium text-[#111827] md:truncate md:text-sm md:text-[#4B5563]'>ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স ২০২৩</h5>
                                  <span className='hidden text-xs text-gray-600 md:block'>Course Trailer</span>
                                </div>
                              </button>
                          </li>
                      </ul>
                  </div>
                  <div id="myTabContent" className='order-1 w-[58%]	'>
                      <div className="  hidden rounded-lg  " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                          <iframe className='h-96 rounded-2xl' style={{width: "100%", border: "0"}} src="https://www.youtube.com/embed/Gr5k18jn5z8" title="MIT College of Management(MIT COM) Students Reviews/Testimonials" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                          <h5 className='py-[18px] text-lg font-semibold leading-[30px] md:flex md:text-[21px]'>ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স ২০২৩</h5>
                      </div>
                      <div className="hidden rounded-lg  " id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                          <iframe className='h-96 rounded-2xl' style={{width: "100%", border: "0"}} src="https://www.youtube.com/embed/qRLnFt7A7Qc" title="MIT College of Management(MIT COM) Students Reviews/Testimonials" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                          <h5 className='py-[18px] text-lg font-semibold leading-[30px] md:flex md:text-[21px]'>Medical Admission Course 2023</h5>
                      </div>
                      <div className="hidden rounded-lg " id="settings" role="tabpanel" aria-labelledby="settings-tab">
                          <iframe className='h-96 rounded-2xl' style={{width: "100%", border: "0"}} src="https://www.youtube.com/embed/He4WpKm1kM8" title="MIT College of Management(MIT COM) Students Reviews/Testimonials" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                          <h5 className='py-[18px] text-lg font-semibold leading-[30px] md:flex md:text-[21px]'>C Unit ভার্সিটি + গুচ্ছ এডমিশন কোর্স ২০২৩</h5>
                      </div>
                      <div className="hidden rounded-lg  " id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                          <iframe className='h-96 rounded-2xl' style={{width: "100%", border: "0"}} src="https://www.youtube.com/embed/Gr5k18jn5z8" title="MIT College of Management(MIT COM) Students Reviews/Testimonials" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                          <h5 className='py-[18px] text-lg font-semibold leading-[30px] md:flex md:text-[21px]'>Medical Admission Course 2023</h5>
                      </div>
                  </div>

                </div>


            </div>
        </div>
    </>
  )
}

export default AdmissionClass