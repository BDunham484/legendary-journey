import { useQuery } from '@apollo/client';
import { ALL_CONCERTS } from '@/utils/queries';

const Test = () => {
    const date = 'Sat Mar 13 2023';

    const { loading, data } = useQuery(ALL_CONCERTS);
    console.log('DATA');
    console.log(data);

    const concerts = data?.allConcerts || [];

    console.log(concerts[0]);

    const testConcert = concerts[0];
    console.log(testConcert);

    if (loading) {
        <div>Loading...</div>
    }

    return (
        <div>
            TEST
            {concerts.map((concert, index) => (
                <div key={index}>
                    {concert.artists}
                </div>
            ))}
        </div>
    )
}

export default Test
