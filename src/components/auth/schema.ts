import * as Yup from 'yup'
const possibleMailEndpoints = ['mail.ru', 'gmail.com', 'inbox.com', 'bk.ru', 'list.ru', 'yandex.ru', 'yahoo.com', 'outlook.com', 'hotmail.com', 'xmail.com', 'internet.ru', 'icloud.com']
const emailRegex = new RegExp(`^[a-zA-Z0-9._%+-]+@(${possibleMailEndpoints.join('|')})$`);
const nameSurnameRegex = /^[a-zA-ZəƏüÜöÖğĞıİçÇşŞ]+$/;
const nicknameRegex = /^(?!.*__)(?!^\d)(?!.*_$)[a-zA-Z\d]+(_[a-zA-Z\d]+)?$/;

export const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('Adınızı daxil edin').min(3, 'Ən az 3 simvol olmalı').max(20, 'Çox uzundur').matches(nameSurnameRegex, 'ad formatı düzgün deyil'),
    surname: Yup.string().required('Soyadınızı daxil edin').min(3, 'Ən az 3 simvol olmalı').max(20, 'Çox uzundur').matches(nameSurnameRegex, 'ad formatı düzgün deyil'),
    nickname: Yup.string().required('Nickname daxil edin').min(3, 'Ən az 3 simvol olmalı').matches(nicknameRegex, 'Nickname formatı düzgün deyil'),
    email: Yup.string().required("Email ünvanını daxil edin").matches(emailRegex, 'Email formatı yanlışdır'),
    password: Yup.string()
        .required('Şifrənizi daxil edin')
        .min(8, 'Ən azı 8 simvol olmalı')
        .matches(/[a-z]/, 'Ən azı bir kiçik hərf')
        .matches(/[A-Z]/, 'Ən azı bir böyük hərf')
        .matches(/\d/, 'Ən azı bir rəqəm')
        .matches(/[@$!%*?&]/, 'Ən azı bir xüsusi xarakter'),
    confirmPassword: Yup.string().required('Şifrənizi yenidən daxil edin').oneOf([Yup.ref("password")], "Şifrələr bir-biri ilə eyni olmalıdır"),
    terms: Yup.bool().oneOf([true]),

}) 