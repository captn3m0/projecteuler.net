#include<iostream>

int main(){
long unsigned int sum=0;
for(int i=1;i<1000;i++){
  if(i%3==0||i%5==0){
    //std::cout<<i<<std::endl;
    sum+=i;
  }
}
std::cout<<sum;
}
