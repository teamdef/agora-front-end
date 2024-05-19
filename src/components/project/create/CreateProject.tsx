import { useRouter } from 'next/router';
import styled from 'styled-components';
import Button from '~/components/common/inputs/button/Button';
import NormalTextField from '~/components/common/inputs/textField/NormalTextField';
import Text from '~/components/common/typo/Text';
import FormRow from '~/components/retro/sprint/create/FormRow';
import useTextFieldInput from '~/hooks/useTextFieldInput';
import { useCreateProjectMutation } from '~/query/project/projectQueries';

const CreateProject = () => {
  const router = useRouter();
  const createProjectMutation = useCreateProjectMutation();
  const [projectTitle, handleProjectTitleChange] = useTextFieldInput('');
  const [projectDescription, handleProjectDescriptionChange] = useTextFieldInput('');

  const handleSubmit = () => {
    if (!projectTitle) {
      alert('제목을 반드시 입력해주세요.');
    }

    const payload = {
      projectTitle,
      projectDescription,
    };

    createProjectMutation.mutate(payload, {
      onSuccess: () => {
        alert('프로젝트 생성 성공');
        router.push('/projects');
      },
      onError: () => alert('프로젝트 생성 실패'),
    });
  };

  return (
    <Wrapper>
      <Text variant="headline_2">새로 만들기</Text>
      <FormSection>
        <FormRow label="제목" required>
          <NormalTextField value={projectTitle} maxLength={20} onChange={handleProjectTitleChange} />
        </FormRow>
        <FormRow label="프로젝트 설명">
          <NormalTextField value={projectDescription} maxLength={100} onChange={handleProjectDescriptionChange} />
        </FormRow>
      </FormSection>
      <Button label="프로젝트 생성" onClick={handleSubmit} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 48px 48px 120px 48px;
`;

const FormSection = styled.div``;
export default CreateProject;
