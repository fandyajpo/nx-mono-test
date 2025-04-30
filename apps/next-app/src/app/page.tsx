import { CarEntity } from '@nx-mono-test/nest-lib/dto';

export default function Index() {
  const createCar: CarEntity = { name: 'a', type: 'a' };
  return (
    <>
      <div className="wrapper">
        <pre>{JSON.stringify(createCar, null, 2)}</pre>
      </div>
    </>
  );
}
