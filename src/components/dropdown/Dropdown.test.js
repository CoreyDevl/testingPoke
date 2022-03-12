import { Dropdown } from './Dropdown';
import { screen, render, userEvent } from '../../tests';


const title = 'Selecione o Pokémongo';
const options = ['Bulbassaur', 'Squirt', 'Charmeleon']

describe('Dropdown', () => {
  //-deve começar fechado
  it('should start closed', () => {

    render(
      <Dropdown title={title} options={options} onSelect={() => { }} />
    );

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();

  });
  //-mostrar lista de opçoes quando for clicado
  it('should show options when open', () => {

    render(
      <Dropdown title={title} options={options} onSelect={() => { }} />
    );

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();

    const dropdownButton = screen.getByRole('button', { name: title });

    userEvent.click(dropdownButton);

    expect(screen.getByRole('menuitem', { name: options[0] })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: options[1] })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: options[2] })).toBeInTheDocument();

  });

  //quando um item for clicado - menu deve ser recolhido e a seleção deve ser mostrada
  it('should signal an option was selected and close dropdown', () => {

    const onSelect = jest.fn();

    render(
      <Dropdown title={title} options={options} onSelect={onSelect} />
    );

    userEvent.click(screen.getByRole('button', { name: title }));

    const option0 = screen.getByRole('menuitem', { name: options[0] });
    const option1 = screen.getByRole('menuitem', { name: options[1] });
    const option2 = screen.getByRole('menuitem', { name: options[2] });

    expect(option0).toBeInTheDocument();
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();

    userEvent.click(option1);

    expect(onSelect).toHaveBeenCalledWith(options[1]);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  });
});