import Sprite from '../../../images/sprite.svg';

export function NeedSearching() {
    return (
        <div>
        <svg width={18} height={20}>
            <use href={`${Sprite}#icon-basket`}></use>
        </svg>
        <p>Try looking for something else...</p>
        </div>
    )
}