#include <stdio.h>

typedef struct TreeNode{
    int data;
    struct TreenNode* left, *right;
} TreeNode; 


// 중위 순회

// 전위 순회

// 후위 순회 

int main(void){
    printf("중위 순회 = ");
    inorder(root);
    printf("\n");
    
    printf("전위 순회 = ");
    preorder(root);
    printf("\n");
    
    printf("후위 순회 = ");
    postorder(root);
    printf("\n");
}