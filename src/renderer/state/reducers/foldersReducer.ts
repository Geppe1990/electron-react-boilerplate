import { ActionType } from '../actionTypes';
import { FolderAction } from '../actions';

const initialState = {
  data: [
    {
      name: '👰‍♀️ Giulia',
      folder: `file:///Users/geppe/Desktop/nuovefoto/giulia`,
      id: 1,
    },
    {
      name: '👯 Amici',
      folder: `file:///Users/geppe/Desktop/nuovefoto/amici`,
      id: 2,
    },
    {
      name: '👨‍👩‍👦‍👦 Famiglia',
      folder: `file:///Users/geppe/Desktop/nuovefoto/famiglia`,
      id: 3,
    },
    {
      name: '👨‍👩‍👦‍👦 Altro',
      folder: `file:///Users/geppe/Desktop/nuovefoto/altro`,
      id: 4,
    },
    {
      name: '🧑‍💻 Io',
      folder: `file:///Users/geppe/Desktop/nuovefoto/io`,
      id: 5,
    },
    {
      name: '🐾 Animali',
      folder: `file:///Users/geppe/Desktop/nuovefoto/animali`,
      id: 6,
    },
    {
      name: '🏖️ Vacanze',
      folder: `file:///Users/geppe/Desktop/nuovefoto/vacanze`,
      id: 7,
    },
    {
      name: '🗂️ ToFolder',
      folder: `file:///Users/geppe/Desktop/nuovefoto/fotodaspostare`,
      id: 8,
    },
  ],
};

const reducer = (state = initialState, action: FolderAction) => {
  switch (action.type) {
    case ActionType.EDITFOLDER:
      return {
        ...state,
        data: state.data.map((content) =>
          content.id === action.payload.id
            ? {
                ...content,
                name: action.payload.name,
                folder: action.payload.folder,
              }
            : content
        ),
      };
    case ActionType.DELETEFOLDER:
      return {
        ...state,
        data: state.data.filter((folder) => folder.id !== action.payload),
      };
    case ActionType.ADDFOLDER:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
