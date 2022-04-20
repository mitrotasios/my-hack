import ArrowRightUpLineIcon from 'remixicon-react/ArrowRightUpLineIcon';
import ArrowRightDownLineIcon from 'remixicon-react/ArrowRightDownLineIcon';

import { classNames } from '../../utils';


export function DeltaLabel({
    deltaType,
    deltaValue,
}) {
    return(
        <div className={classNames(
            deltaType === 'increase' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600',
            'inline-flex px-2.5 py-0.5 rounded-full text-sm font-medium'
        )}>
            {deltaType === 'increase' ? (
            <ArrowRightUpLineIcon
                className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-600"
                aria-hidden="true"
            />
            ) : (
            <ArrowRightDownLineIcon
                className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-600"
                aria-hidden="true"
            />
            )}

            <span className="sr-only">{deltaType === 'increase' ? 'Increased' : 'Decreased'} by</span>
            {deltaValue}
        </div>
    )
}