#include<iostream>
#include<fstream>
#include<string.h>
#include<stdlib.h>
using namespace std;
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
	ifstream fin("22.sorted.txt");
	char s[100];
	long score=0,line=1,word=0;
	while(fin>>s)
	{
		word=line*word_score(s);
		if(strcmp(s,"COLIN")==0)
		{
			cout<<"COLIN X"<<word_score(s)<<endl;
			cout<<"COLIN SCORE "<<word<<endl;
		}
		score+=word;
		line++;
	}
	cout<<score;
	return 0;
}
