#include <iostream>
#define MAX 1000000

unsigned int dict[MAX];

long int collatz_length(long long int start)
{
	long int count=1;
	long long int num=start;
	if(dict[start]!=0)
		return dict[start];
	//Now we calculate the length, if not in dict
	while(num!=1)
	{
		if(num%2==0)
			num=num/2;
		else
			num=3*num+1;
		count++;
	}
	dict[start]=count;
	return count;
}

int main()
{
	long int i=0;
	//set chain length to zero for all numbers
	for(i=0;i<=MAX;i++)
		dict[i]=0;
	//Now we calculate the collatz length for all numbers below 1M
	long int max=0;
	long int maxNum=0;
	for(i=10;i<=MAX;i++)
	{
		long int length=collatz_length(i);
		if(length>max)
		{
			maxNum=i;
			max=length;
		}
	}
	std::cout<<maxNum<<" has a length of "<<max;
	return 0;
}