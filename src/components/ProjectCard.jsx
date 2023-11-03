import Image from 'next/image';
function ProjectCard() {
    return (
        <div className='flex flex-col md:flex-row lg:flex-row items-start justify-center '>
            <div class="CARD bg-gray-100 p-4 md:w-1/2 lg:w-1/2 w-full rounded-md m-2 md:m-4 lg:m-4">
                <Image src="/images/project-1.png" height={100} width={440} alt='image' />
                <h5 className='text-gray-400 text-xs my-4'>Project # 1</h5>
                <h3 className='text-black font-bold text-lg'>Marketing Agency</h3>
                <h2 className='text-black font-mono'>Visit the Website <a target='_blank' href="https://bebrandmarketing.com/" className='underline text-xs text-blue-500'>click here</a></h2>
            </div>

            <div class="CARD bg-gray-100 p-4 md:w-1/2 lg:w-1/2 w-full rounded-md  m-2 md:m-4 lg:m-4">
                <Image src="/images/project-2.png" height={100} width={400} alt='image' />
                <h5 className='text-gray-400 text-xs my-4'>Project # 2</h5>
                <h3 className='text-black font-bold text-lg'>Cloudinary Photo App</h3>
                <h2 className='text-black font-mono'>Visit the Website <a target='_blank' href="https://cloudinary-photo-app.vercel.app/" className='underline text-xs text-blue-500'>click here</a></h2>
            </div>

            <div class="CARD bg-gray-100 p-4 md:w-1/2 lg:w-1/2 w-full rounded-md  m-2 md:m-4 lg:m-4">
                <Image src="/images/project-3.png" height={100} width={400} alt='image' />
                <h5 className='text-gray-400 text-xs my-4'>Project # 3</h5>
                <h3 className='text-black font-bold text-lg'>FamilyGuy Quiz App</h3>
                <h2 className='text-black font-mono'>Visit the Website <a target='_blank' href="https://family-guy-quiz.vercel.app/" className='underline text-xs text-blue-500'>click here</a></h2>
            </div>
        </div>
    );
}

export default ProjectCard