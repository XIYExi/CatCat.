import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import classNames from "classnames";

/**
 * value
 * setValue
 * error
 * type
 * placeholder
 * label
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function Input(props) {

    const Classes = classNames('pl-2 block w-full rounded-md border-0 py-1.5 pr-10 ring-1 focus:opacity-40 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6', {
        'text-red-900': props.error,
        'ring-red-300': props.error,
        'placeholder:text-red-300': props.error,
        'focus:ring-red-500': props.error,
    }, props.className);

    return (
        <div className='w-full w-xl mx-2 mb-6'>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                {props.label}
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    type={props.type || 'email'}
                    className={Classes}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={e => props.setValue(e)}
                />
                {props.error && <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500"/>
                </div>}
            </div>
            {props.error && <p className="mt-2 text-sm text-red-600" id="email-error">
                {props.error}.
            </p>}
        </div>
    )
}
