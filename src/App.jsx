import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  middleName: yup.string(),
  lastName: yup.string().required('Last Name is required'),
  month: yup.string().required('Month is required'),
  day: yup.string().required('Day is required'),
  year: yup.string().required('Year is required'),
  gender: yup.string().required('Gender is required'),
  address: yup.string().required('Address is required'),
  address2: yup.string(),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  zip: yup.string().required('Postal / Zip Code is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  mobileNumber: yup.string().required('Mobile Number is required'),
  phoneNumber: yup.string().required('Phone Number is required'),
  workNumber: yup.string(),
  company: yup.string(),
  courses: yup.string().required('Course is required'),
  comments: yup.string(),
});

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('https://cff2.earth.com/uploads/2023/06/02100547/Mountain-2.jpg') no-repeat center center fixed;
  background-size: cover;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.9); /* semi-transparent background */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h1`
  font-size: 24px;
  color: #005073;
  margin-bottom: 10px;
  text-align: center;
`;

const FormSubtitle = styled.p`
  font-size: 14px;
  color: #005073;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    border-color: #66afe9;
    outline: none;
    box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    border-color: #66afe9;
    outline: none;
    box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;

  &:focus {
    border-color: #66afe9;
    outline: none;
    box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);
  }
`;

const Error = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const Button = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`;

const FlexGroup = styled.div`
  display: flex;
  gap: 10px;

  > div {
    flex: 1;
  }
`;

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <PageContainer>
      <FormContainer>
        <FormTitle>Registration Form</FormTitle>
        <FormSubtitle>Fill out the form carefully for registration</FormSubtitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="firstName">Student Name</Label>
            <FlexGroup>
              <div>
                <Input id="firstName" placeholder="First Name" {...register('firstName')} />
                {errors.firstName && <Error>{errors.firstName.message}</Error>}
              </div>
              <div>
                <Input id="middleName" placeholder="Middle Name" {...register('middleName')} />
              </div>
              <div>
                <Input id="lastName" placeholder="Last Name" {...register('lastName')} />
                {errors.lastName && <Error>{errors.lastName.message}</Error>}
              </div>
            </FlexGroup>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="birthDate">Birth Date</Label>
            <FlexGroup>
              <div>
                <Input id="month" placeholder="Month" {...register('month')} />
                {errors.month && <Error>{errors.month.message}</Error>}
              </div>
              <div>
                <Input id="day" placeholder="Day" {...register('day')} />
                {errors.day && <Error>{errors.day.message}</Error>}
              </div>
              <div>
                <Input id="year" placeholder="Year" {...register('year')} />
                {errors.year && <Error>{errors.year.message}</Error>}
              </div>
            </FlexGroup>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="gender">Gender</Label>
            <Select id="gender" {...register('gender')}>
              <option value="">Please Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Select>
            {errors.gender && <Error>{errors.gender.message}</Error>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="Street Address" {...register('address')} />
            {errors.address && <Error>{errors.address.message}</Error>}
          </FormGroup>

          <FormGroup>
            <Input id="address2" placeholder="Street Address Line 2" {...register('address2')} />
          </FormGroup>

          <FormGroup>
            <FlexGroup>
              <div>
                <Input id="city" placeholder="City" {...register('city')} />
                {errors.city && <Error>{errors.city.message}</Error>}
              </div>
              <div>
                <Input id="state" placeholder="State / Province" {...register('state')} />
                {errors.state && <Error>{errors.state.message}</Error>}
              </div>
            </FlexGroup>
          </FormGroup>

          <FormGroup>
            <Input id="zip" placeholder="Postal / Zip Code" {...register('zip')} />
            {errors.zip && <Error>{errors.zip.message}</Error>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Student E-mail</Label>
            <Input id="email" placeholder="example@example.com" {...register('email')} />
            {errors.email && <Error>{errors.email.message}</Error>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="mobileNumber">Mobile Number</Label>
            <Input id="mobileNumber" placeholder="(000) 000-0000" {...register('mobileNumber')} />
            {errors.mobileNumber && <Error>{errors.mobileNumber.message}</Error>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input id="phoneNumber" placeholder="(000) 000-0000" {...register('phoneNumber')} />
            {errors.phoneNumber && <Error>{errors.phoneNumber.message}</Error>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="workNumber">Work Number</Label>
            <Input id="workNumber" placeholder="(000) 000-0000" {...register('workNumber')} />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="company">Company</Label>
            <Input id="company" placeholder="" {...register('company')} />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="courses">Courses</Label>
            <Select id="courses" {...register('courses')}>
              <option value="">Please Select</option>
              <option value="Course 1">Course 1</option>
              <option value="Course 2">Course 2</option>
              <option value="Course 3">Course 3</option>
            </Select>
            {errors.courses && <Error>{errors.courses.message}</Error>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="comments">Additional Comments</Label>
            <TextArea id="comments" rows="4" {...register('comments')} />
          </FormGroup>

          <Button type="submit">Submit</Button>
        </Form>
      </FormContainer>
    </PageContainer>
  );
}

export default App;
