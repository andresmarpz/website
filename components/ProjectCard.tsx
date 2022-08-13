import Button from '@/components/Button';
import Image from 'next/image';

const Project = (props: {
    title: string;
    description: string;
    techStack: string;
    link?: string;
    github?: string;
    image?: string;
    className?: string;
}) => {
    return (
        <div
            className={
                'text-gray-600 h-full overflow-hidden border border-gray-200 rounded' +
                (props.className ?? '')
            }>
			<div className='px-4'>

            <h2 className="mt-4 text-lg font-semibold text-gray-800">
                {props.title}
            </h2>
            <div className="w-full flex justify-center"></div>
            <p>{props.description}</p>
            <p>Stack: {props.techStack}</p>
            <div className="flex items-center mt-2 py-4">
                {props.link !== undefined ? (
                    <a href={props.link} target="_blank" rel="noreferrer">
                        <Button fill={true}>Visit</Button>
                    </a>
                ) : (
                    ''
                )}
                {props.github !== undefined ? (
                    <a
                        className={props.link !== undefined ? 'ml-3' : ''}
                        href={props.github}
                        target="_blank"
                        rel="noreferrer">
                        <Image
                            src={'/svgs/github.svg'}
                            width={24}
                            height={24}
                            alt={'github logo'}
                        />
                    </a>
                ) : (
                    ''
                )}
            </div>
			</div>
            {props.image && (
                <div
                    style={{
                        boxSizing: 'border-box',
                        width: '100%',
                        margin: '32px auto 0',
                        aspectRatio: '21 / 13',
                        overflow: 'hidden',
                        position: 'relative'
                    }}>
                    <Image
                        alt={`Preview of the site with url ${props.link}`}
                        src={props.image}
                        objectFit="cover"
                        layout="fill"
						priority={true}
                    />
                </div>
            )}
        </div>
    );
};

export default Project;
