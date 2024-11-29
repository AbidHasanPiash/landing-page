import Link from 'next/link'
import { RiLogoutCircleRLine } from 'react-icons/ri'

export default function LearnMore({ link, props }) {
    return (
        <div className='hover:scale-90 transition-all duration-200 w-fit'>
            <Link
                {...props}
                href={link || '#'} 
                className='flex items-center font-bold space-x-2'>
                <span>Learn more</span>
                <RiLogoutCircleRLine />
            </Link>
        </div>
    )
}
