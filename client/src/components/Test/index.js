import { useQuery } from '@apollo/client';
import { GET_CONCERTS_BY_DATE } from '@/utils/queries';

const Test = () => {
    const date = 'Sat Mar 13 2023';

    const {loading, data} = useQuery(GET_CONCERTS_BY_DATE, {
        variables: { date: date }
    });
    console.log('DATA');
    console.log(data);

    const concerts = data?.concertsFRomDb || [];

    console.log(concerts);

    return (
        <div>
            TEST
        </div>
    )
}

export default Test
