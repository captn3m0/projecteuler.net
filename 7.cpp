#include <iostream>
#include <cmath>
bool* sieve(long int size)
{
	bool* primes=new bool[size+1];
	long int i=0;
	for(i=1;i<=size;i++)
	{
		primes[i]=true;
	}
	for(i=2;i<=std::sqrt(size);i++)
	{
		if(primes[i]==true)
		{
			//Put all multiples of i to false
			long int j=2;//We start removing from 2*2=4
			while(j*i<=size)
			{
				primes[i*j]=false;
				j++;
			}
		}
	}
	return primes;
}

int main()
{
	int counter=1;
	bool* primes=sieve(2000000);
	for(int i=2;i<=2000000;i++)
		if(primes[i])
		{
			if(counter==10001)
				std::cout<<i;
			counter++;
		}
	return 0;
}