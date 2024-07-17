import { FunctionComponent, ReactNode } from 'react';

const Bold: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    return <b className='text-[#f5fc2f]'>{children}</b>
}

export default Bold;