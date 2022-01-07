import React from 'react';
import { TodoIcon } from '../TodoIcon';

function CompleteIcon ({ completed, onComplete }) {
    return (
        <TodoIcon
            type="check"
            color={completed? '#15dd1c' : 'grey'}
            onClick={onComplete}
        />
    )
}

export { CompleteIcon }