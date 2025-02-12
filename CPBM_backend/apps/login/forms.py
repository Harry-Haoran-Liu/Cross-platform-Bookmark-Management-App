from django import forms


class LoginForm(forms.Form):
    username=forms.CharField(label='用户名',required=True,min_length=4,max_length=128)
    password=forms.CharField(label='密码',required=True,min_length=4,max_length=128)



class RegisterForm(forms.Form):
    username = forms.CharField(label='用户名', required=True, max_length=128)
    password1 = forms.CharField(label='密码', required=True, max_length=128)
    password2 = forms.CharField(label='确认密码', required=True, max_length=128)
    email = forms.EmailField(label="邮箱地址")

