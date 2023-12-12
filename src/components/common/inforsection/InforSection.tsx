import * as S from '@styles/components/common/inforsection/inforSection.styles';
import { Information } from '_types/reput';

type Props = {
  information: Information[];
  label: string;
};

export const InforSection = ({ information, label }: Props) => {
  return (
    <S.Information>
      <h1>{label}</h1>

      <S.InforTable>
        <section>
          {information.map((info) => (
            <S.InforItem key={info.id}>
              <h1>{info.label}</h1>
              <p>{info.content}</p>
            </S.InforItem>
          ))}
        </section>
      </S.InforTable>
    </S.Information>
  );
};
