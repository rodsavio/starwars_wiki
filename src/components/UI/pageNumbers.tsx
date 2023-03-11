import './pageNumbers.css';

const PageNumbers: React.FC<{moduleUrl: string; totalItems: number; currentPage: string}> = (props): any => {    
    let x: number;
    let pageBoxes: number[] = [];
    let numpages: number = Math.floor(props.totalItems/10);

    if ((props.totalItems % 10) > 0) {
        numpages += 1;
    }

    for (x = 1; x <= numpages; x++) {
        pageBoxes.push(x);
    }

    return (
        <div className='pageNumbers'>
            {pageBoxes.map((i) => {
                let classCurrent: string = '';

                if (i.toString() === props.currentPage) {
                    classCurrent = 'currentPage'
                }

                return (
                    <a key={i} className={`pageButton ${classCurrent}`} href={props.moduleUrl + i}>{i}</a>
                );                
            })}
        </div>
    );
};

export default PageNumbers;