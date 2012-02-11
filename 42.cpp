#include<iostream>
#include<fstream>
#include<string.h>
#include<stdlib.h>
using namespace std;
int compareints (const void * a, const void * b)
{
  return ( *(int*)a - *(int*)b );
}
int word_score(char* s)
{
	int word=0;
	for(int i=0;i<strlen(s);i++)
	{
		word+=(s[i]-'A')+1;
	}
	return word;
}
int main()
{
	long triangles[21];
	for(int i=0;i<20;i++)
	{
		triangles[i] = 0;//(i+1)*(i+2)/2;
//		cout<<triangles[i];
		//t[0] holds t[1]
	}
	ifstream fin("42.txt");
	char s[100];
	long word=0,count=0;
	while(fin>>s)
	{
		word=word_score(s);
		int* index;
//		index = (int*) bsearch(&word,triangles,20,sizeof(int),compareints);
		if(index != NULL)
		{
			cout<<word<<endl;
			count++;
		}
	}
	return 0;
}
