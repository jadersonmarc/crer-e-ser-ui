import Image from 'next/image';

type VideoThumbnailProps = {
    imageUrl: string;
    title?: string;
    height?: string;
    width?: string;
    
  };

function VideoThumbnail({ imageUrl, title = '', height = '', width = '80%'}: VideoThumbnailProps) {
    return (
      <div  className="w-full relative h-full bg-gray-300 cursor-pointer rounded-md mb-2" >
        <Image src={imageUrl} alt={title} className="w-full h-full rounded-md mb-2 object-cover" />
        <div className="absolute inset-0 w-full flex items-center text-yellow-600 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-15 h-14">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    );
}
  
export default VideoThumbnail;