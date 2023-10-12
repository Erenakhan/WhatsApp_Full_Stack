import React from 'react'
import { FaUserFriends,FaCircleNotch } from 'react-icons/fa';
import {BsFillChatDotsFill } from 'react-icons/bs';
import {RiChatNewFill } from 'react-icons/ri';
import {BsThreeDotsVertical } from 'react-icons/bs';
import {BsFilter } from 'react-icons/bs';
import {AiOutlineSearch } from 'react-icons/ai';
import {AiOutlineArrowLeft } from 'react-icons/ai';

export default function Channels() {
  return (
    <div className='bg-third h-full'>
        <header className='h-[60px]  flex justify-between px-4 items-center bg-secondary'>
            <div className='rounded-full'>
                <img className='rounded-full w-10 h-10'  src="https://pps.whatsapp.net/v/t61.24694-24/315808781_799356601756266_1626423536398725512_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdToexDpS1CjOwLvS4_zF2OArJYfRWQeS5F5IkQ6qG12uA&oe=6530AF8F&_nc_sid=000000&_nc_cat=104" alt="" /></div>
            <div className='flex gap-7 '> 
            <FaUserFriends className='w-6 h-6 text-[#aebac1]'/>
            <FaCircleNotch className='w-6 h-6 text-[#aebac1]'/>
            <BsFillChatDotsFill className='w-6 h-6 text-[#aebac1]'/>
            <RiChatNewFill className='w-6 h-6 text-[#aebac1]'/>
            <BsThreeDotsVertical className='w-6 h-6 text-[#aebac1]'/></div>
        </header>
        <div className='flex px-4 py-2'>
            <div className='rounded-md h-9 flex gap-8 items-center w-full px-5 bg-secondary '>
                <AiOutlineSearch className='peer-focus:hidden  w-4 h-4 text-[#aebac1]' />
                <AiOutlineArrowLeft className='hidden peer-focus:text-red-500 w-4 h-4 text-[#aebac1]' />
                <input type="text" className='peer  bg-secondary w-full    focus:outline-none ' placeholder='Search or Start a new chat'/>
            </div>
            <BsFilter className='w-6 h-6 mx-4 my-auto text-[#aebac1]' />
        </div>
        <div className='h-[570px]   overflow-y-auto  '>
           
        <div className='flex w-full h-[75px] hover:bg-gray-800 gap-5'>
            <div className='w-1/5  flex justify-center items-center'>  
            <img className='rounded-full w-[70px] h-[70px]'  src="https://pps.whatsapp.net/v/t61.24694-24/315808781_799356601756266_1626423536398725512_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdToexDpS1CjOwLvS4_zF2OArJYfRWQeS5F5IkQ6qG12uA&oe=6530AF8F&_nc_sid=000000&_nc_cat=104" alt="" />
            </div>
            <div className='w-full  flex flex-col justify-center h-full border-b-2 border-gray-700  '>
                <div className='font-thin text-lg  '>
                <h3 className='font-semibold'>ali doğan</h3>
                <p>dlkdşlkdşlkdşk</p>
                </div>
            </div>
            </div>
            <div className='flex w-full h-[75px] hover:bg-gray-800 gap-5'>
            <div className='w-1/5  flex justify-center items-center'>  
            <img className='rounded-full w-[70px] h-[70px]'  src="https://pps.whatsapp.net/v/t61.24694-24/315808781_799356601756266_1626423536398725512_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdToexDpS1CjOwLvS4_zF2OArJYfRWQeS5F5IkQ6qG12uA&oe=6530AF8F&_nc_sid=000000&_nc_cat=104" alt="" />
            </div>
            <div className='w-full  flex flex-col justify-center h-full border-b-2 border-gray-700  '>
                <div className='font-thin text-lg  '>
                <h3 className='font-semibold'>ali doğan</h3>
                <p>dlkdşlkdşlkdşk</p>
                </div>
            </div>
            </div>
            <div className='flex w-full h-[75px] hover:bg-gray-800 gap-5'>
            <div className='w-1/5  flex justify-center items-center'>  
            <img className='rounded-full w-[70px] h-[70px]'  src="https://pps.whatsapp.net/v/t61.24694-24/315808781_799356601756266_1626423536398725512_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdToexDpS1CjOwLvS4_zF2OArJYfRWQeS5F5IkQ6qG12uA&oe=6530AF8F&_nc_sid=000000&_nc_cat=104" alt="" />
            </div>
            <div className='w-full  flex flex-col justify-center h-full border-b-2 border-gray-700  '>
                <div className='font-thin text-lg  '>
                <h3 className='font-semibold'>ali doğan</h3>
                <p>dlkdşlkdşlkdşk</p>
                </div>
            </div>
            </div>
            <div className='flex w-full h-[75px] hover:bg-gray-800 gap-5'>
            <div className='w-1/5  flex justify-center items-center'>  
            <img className='rounded-full w-[70px] h-[70px]'  src="https://pps.whatsapp.net/v/t61.24694-24/315808781_799356601756266_1626423536398725512_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdToexDpS1CjOwLvS4_zF2OArJYfRWQeS5F5IkQ6qG12uA&oe=6530AF8F&_nc_sid=000000&_nc_cat=104" alt="" />
            </div>
            <div className='w-full  flex flex-col justify-center h-full border-b-2 border-gray-700  '>
                <div className='font-thin text-lg  '>
                <h3 className='font-semibold'>ali doğan</h3>
                <p>dlkdşlkdşlkdşk</p>
                </div>
            </div>
            </div>
            <div className='flex w-full h-[75px] hover:bg-gray-800 gap-5'>
            <div className='w-1/5  flex justify-center items-center'>  
            <img className='rounded-full w-[70px] h-[70px]'  src="https://pps.whatsapp.net/v/t61.24694-24/315808781_799356601756266_1626423536398725512_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdToexDpS1CjOwLvS4_zF2OArJYfRWQeS5F5IkQ6qG12uA&oe=6530AF8F&_nc_sid=000000&_nc_cat=104" alt="" />
            </div>
            <div className='w-full  flex flex-col justify-center h-full border-b-2 border-gray-700  '>
                <div className='font-thin text-lg  '>
                <h3 className='font-semibold'>ali doğan</h3>
                <p>dlkdşlkdşlkdşk</p>
                </div>
            </div>
            </div>
            <div className='flex w-full h-[75px] hover:bg-gray-800 gap-5'>
            <div className='w-1/5  flex justify-center items-center'>  
            <img className='rounded-full w-[70px] h-[70px]'  src="https://pps.whatsapp.net/v/t61.24694-24/315808781_799356601756266_1626423536398725512_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdToexDpS1CjOwLvS4_zF2OArJYfRWQeS5F5IkQ6qG12uA&oe=6530AF8F&_nc_sid=000000&_nc_cat=104" alt="" />
            </div>
            <div className='w-full  flex flex-col justify-center h-full border-b-2 border-gray-700  '>
                <div className='font-thin text-lg  '>
                <h3 className='font-semibold'>ali doğan</h3>
                <p>dlkdşlkdşlkdşk</p>
                </div>
            </div>
            </div>
            <div className='flex w-full h-[75px] hover:bg-gray-800 gap-5'>
            <div className='w-1/5  flex justify-center items-center'>  
            <img className='rounded-full w-[70px] h-[70px]'  src="https://pps.whatsapp.net/v/t61.24694-24/315808781_799356601756266_1626423536398725512_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdToexDpS1CjOwLvS4_zF2OArJYfRWQeS5F5IkQ6qG12uA&oe=6530AF8F&_nc_sid=000000&_nc_cat=104" alt="" />
            </div>
            <div className='w-full  flex flex-col justify-center h-full border-b-2 border-gray-700  '>
                <div className='font-thin text-lg  '>
                <h3 className='font-semibold'>ali doğan</h3>
                <p>dlkdşlkdşlkdşk</p>
                </div>
            </div>
            </div>
            <div className='flex w-full h-[75px] hover:bg-gray-800 gap-5'>
            <div className='w-1/5  flex justify-center items-center'>  
            <img className='rounded-full w-[70px] h-[70px]'  src="https://pps.whatsapp.net/v/t61.24694-24/315808781_799356601756266_1626423536398725512_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdToexDpS1CjOwLvS4_zF2OArJYfRWQeS5F5IkQ6qG12uA&oe=6530AF8F&_nc_sid=000000&_nc_cat=104" alt="" />
            </div>
            <div className='w-full  flex flex-col justify-center h-full border-b-2 border-gray-700  '>
                <div className='font-thin text-lg  '>
                <h3 className='font-semibold'>ali doğan</h3>
                <p>dlkdşlkdşlkdşk</p>
                </div>
            </div>
            </div>
            <div className='flex w-full h-[75px] hover:bg-gray-800 gap-5'>
            <div className='w-1/5  flex justify-center items-center'>  
            <img className='rounded-full w-[70px] h-[70px]'  src="https://pps.whatsapp.net/v/t61.24694-24/315808781_799356601756266_1626423536398725512_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdToexDpS1CjOwLvS4_zF2OArJYfRWQeS5F5IkQ6qG12uA&oe=6530AF8F&_nc_sid=000000&_nc_cat=104" alt="" />
            </div>
            <div className='w-full  flex flex-col justify-center h-full border-b-2 border-gray-700  '>
                <div className='font-thin text-lg  '>
                <h3 className='font-semibold'>ali doğan</h3>
                <p>dlkdşlkdşlkdşk</p>
                </div>
            </div>
            </div>
            <div className='flex w-full h-[75px] hover:bg-gray-800 gap-5'>
            <div className='w-1/5  flex justify-center items-center'>  
            <img className='rounded-full w-[70px] h-[70px]'  src="https://pps.whatsapp.net/v/t61.24694-24/315808781_799356601756266_1626423536398725512_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdToexDpS1CjOwLvS4_zF2OArJYfRWQeS5F5IkQ6qG12uA&oe=6530AF8F&_nc_sid=000000&_nc_cat=104" alt="" />
            </div>
            <div className='w-full  flex flex-col justify-center h-full border-b-2 border-gray-700  '>
                <div className='font-thin text-lg  '>
                <h3 className='font-semibold'>ali doğan</h3>
                <p>dlkdşlkdşlkdşk</p>
                </div>
            </div>
            </div>
            

        </div>
    </div>
  )
}

/* <div className='flex w-full h-[75px] hover:bg-gray-800 gap-5'>
            <div className='w-1/5  flex justify-center items-center'>  
            <img className='rounded-full w-[70px] h-[70px]'  src="https://pps.whatsapp.net/v/t61.24694-24/315808781_799356601756266_1626423536398725512_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdToexDpS1CjOwLvS4_zF2OArJYfRWQeS5F5IkQ6qG12uA&oe=6530AF8F&_nc_sid=000000&_nc_cat=104" alt="" />
            </div>
            <div className='w-full  flex flex-col justify-center h-full border-b-2 border-gray-700  '>
                <div className='font-thin text-lg  '>
                <h3 className='font-semibold'>ali doğan</h3>
                <p>dlkdşlkdşlkdşk</p>
                </div>
            </div>
            </div>
            <div className='flex w-full h-[75px] hover:bg-gray-800 gap-5'>
            <div className='w-1/5  flex justify-center items-center'>  
            <img className='rounded-full w-[70px] h-[70px]'  src="https://pps.whatsapp.net/v/t61.24694-24/315808781_799356601756266_1626423536398725512_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdToexDpS1CjOwLvS4_zF2OArJYfRWQeS5F5IkQ6qG12uA&oe=6530AF8F&_nc_sid=000000&_nc_cat=104" alt="" />
            </div>
            <div className='w-full  flex flex-col justify-center h-full border-b-2 border-gray-700  '>
                <div className='font-thin text-lg  '>
                <h3 className='font-semibold'>ali doğan</h3>
                <p>dlkdşlkdşlkdşk</p>
                </div>
            </div>
            </div>
            <div className='flex w-full h-[75px] hover:bg-gray-800 gap-5'>
            <div className='w-1/5  flex justify-center items-center'>  
            <img className='rounded-full w-[70px] h-[70px]'  src="https://pps.whatsapp.net/v/t61.24694-24/315808781_799356601756266_1626423536398725512_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdToexDpS1CjOwLvS4_zF2OArJYfRWQeS5F5IkQ6qG12uA&oe=6530AF8F&_nc_sid=000000&_nc_cat=104" alt="" />
            </div>
            <div className='w-full  flex flex-col justify-center h-full border-b-2 border-gray-700  '>
                <div className='font-thin text-lg  '>
                <h3 className='font-semibold'>ali doğan</h3>
                <p>dlkdşlkdşlkdşk</p>
                </div>
            </div>
            </div>
            <div className='flex w-full h-[75px] hover:bg-gray-800 gap-5'>
            <div className='w-1/5  flex justify-center items-center'>  
            <img className='rounded-full w-[70px] h-[70px]'  src="https://pps.whatsapp.net/v/t61.24694-24/315808781_799356601756266_1626423536398725512_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdToexDpS1CjOwLvS4_zF2OArJYfRWQeS5F5IkQ6qG12uA&oe=6530AF8F&_nc_sid=000000&_nc_cat=104" alt="" />
            </div>
            <div className='w-full  flex flex-col justify-center h-full border-b-2 border-gray-700  '>
                <div className='font-thin text-lg  '>
                <h3 className='font-semibold'>ali doğan</h3>
                <p>dlkdşlkdşlkdşk</p>
                </div>
            </div>
            </div>
            <div className='flex w-full h-[75px] hover:bg-gray-800 gap-5'>
            <div className='w-1/5  flex justify-center items-center'>  
            <img className='rounded-full w-[70px] h-[70px]'  src="https://pps.whatsapp.net/v/t61.24694-24/315808781_799356601756266_1626423536398725512_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdToexDpS1CjOwLvS4_zF2OArJYfRWQeS5F5IkQ6qG12uA&oe=6530AF8F&_nc_sid=000000&_nc_cat=104" alt="" />
            </div>
            <div className='w-full  flex flex-col justify-center h-full border-b-2 border-gray-700  '>
                <div className='font-thin text-lg  '>
                <h3 className='font-semibold'>ali doğan</h3>
                <p>dlkdşlkdşlkdşk</p>
                </div>
            </div>
            </div> */
