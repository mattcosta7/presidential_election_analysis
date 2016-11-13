import electionData from 'presidential-election-data'; // gets data from 1992 through 2012
import data2016 from '../../json/2016.json';
import data1964 from '../../json/1964.json';
import data1968 from '../../json/1968.json';
import data1972 from '../../json/1972.json';
import data1976 from '../../json/1976.json';
import data1980 from '../../json/1980.json';
import data1984 from '../../json/1984.json';
import data1988 from '../../json/1988.json';

const myData = electionData;
myData['1964'] = data1964;
myData['1968'] = data1968;
myData['1972'] = data1972;
myData['1976'] = data1976;
myData['1980'] = data1980;
myData['1984'] = data1984;
myData['1988'] = data1988;
myData['2016'] = data2016;

export default myData;
