import {useDeferredValue} from 'react'

export function  List({items}) {
    const def = useDeferredValue(items)
    return (
        <ul>
            {def.map(i => <li key={i.id}>{i.name}</li>)}
        </ul>
    )
}