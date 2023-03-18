import { useQuery } from '@apollo/client';
import { ALL_CONCERTS } from '@/utils/queries';

const Test = () => {
    const date = 'Sat Mar 13 2023';

    const {loading, data} = useQuery(ALL_CONCERTS);
    console.log('DATA');
    console.log(data);

    const concerts = data?.allConcerts || [];

    console.log(concerts[0]);

    return (
        <div>
            TEST
        </div>
    )
}

export default Test
