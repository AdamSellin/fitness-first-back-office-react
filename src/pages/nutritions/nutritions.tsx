/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Breadcrumb,
  Button,
  Checkbox,
  Label,
  Modal,
  Table,
  Textarea,
  TextInput,
} from "flowbite-react";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  HiCog,
  HiDocumentDownload,
  HiDotsVertical,
  HiExclamationCircle,
  HiHome,
  HiOutlineExclamationCircle,
  HiOutlinePencilAlt,
  HiPencilAlt,
  HiPlus,
  HiTrash,
  HiUpload,
} from "react-icons/hi";
import NavbarSidebarLayout from "../../layouts/navbar-sidebar";
import { Pagination } from "../users/list";
import axios from "axios";
import notifications from "../../services/notifications";
const NutritionPage: FC = function () {
  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
        <div className="mb-1 w-full">
          <div className="mb-4">
            <Breadcrumb className="mb-4">
              <Breadcrumb.Item href="#">
                <div className="flex items-center gap-x-3">
                  <HiHome className="text-xl" />
                  <span className="dark:text-white">Home</span>
                </div>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="/users/list">Nutritions</Breadcrumb.Item>
              <Breadcrumb.Item>All Nutritions</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              All nutritions
            </h1>
          </div>
          <div className="sm:flex">
            <div className="mb-3 hidden items-center dark:divide-gray-700 sm:mb-0 sm:flex sm:divide-x sm:divide-gray-100">
              <form className="lg:pr-3">
                <Label htmlFor="users-search" className="sr-only">
                  Search
                </Label>
                <div className="relative mt-1 lg:w-64 xl:w-96">
                  <TextInput
                    id="users-search"
                    name="users-search"
                    placeholder="Search for users"
                  />
                </div>
              </form>
              <div className="mt-3 flex space-x-1 pl-0 sm:mt-0 sm:pl-2">
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Configure</span>
                  <HiCog className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Delete</span>
                  <HiTrash className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Purge</span>
                  <HiExclamationCircle className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Settings</span>
                  <HiDotsVertical className="text-2xl" />
                </a>
              </div>
            </div>
            <div className="ml-auto flex items-center space-x-2 sm:space-x-3">
              <AddRecipeModal />
              <Button color="gray">
                <div className="flex items-center gap-x-3">
                  <HiDocumentDownload className="text-xl" />
                  <span>Export</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <AllUsersTable />
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </NavbarSidebarLayout>
  );
}


// const AddRecipeModal: FC = function () {
//   const [isOpen, setOpen] = useState(false);
//   return (
//     <>
//       <Button color="primary" onClick={() => setOpen(true)}>
//         <div className="flex items-center gap-x-3">
//           <HiPlus className="text-xl" />
//           Add Recipe
//         </div>
//       </Button>
//       <Modal onClose={() => setOpen(false)} show={isOpen}>
//         <Modal.Header className="border-b border-gray-200 !p-6 dark:border-gray-700">
//           <strong>Add New Recipe</strong>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//             <div>
//               <Label htmlFor="firstName">First name</Label>
//               <div className="mt-1">
//                 <TextInput
//                   id="firstName"
//                   name="firstName"
//                   placeholder="Bonnie"
//                 />
//               </div>
//             </div>
//             <div>
//               <Label htmlFor="lastName">Last name</Label>
//               <div className="mt-1">
//                 <TextInput id="lastName" name="lastName" placeholder="Green" />
//               </div>
//             </div>
//             <div>
//               <Label htmlFor="email">Email</Label>
//               <div className="mt-1">
//                 <TextInput
//                   id="email"
//                   name="email"
//                   placeholder="example@company.com"
//                   type="email"
//                 />
//               </div>
//             </div>
//             <div>
//               <Label htmlFor="phone">Phone number</Label>
//               <div className="mt-1">
//                 <TextInput
//                   id="phone"
//                   name="phone"
//                   placeholder="e.g., +(12)3456 789"
//                   type="tel"
//                 />
//               </div>
//             </div>
//             <div>
//               <Label htmlFor="department">Department</Label>
//               <div className="mt-1">
//                 <TextInput
//                   id="department"
//                   name="department"
//                   placeholder="Development"
//                 />
//               </div>
//             </div>
//             <div>
//               <Label htmlFor="company">Company</Label>
//               <div className="mt-1">
//                 <TextInput
//                   id="company"
//                   name="company"
//                   placeholder="Somewhere"
//                 />
//               </div>
//             </div>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button color="primary" onClick={() => setOpen(false)}>
//             Add user
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   )
// }

const AddRecipeModal: FC = function () {
  const [isOpen, setOpen] = useState(false);
  const [recipe, setRecipe] = useState<{
    title: string;
    UserId: number;
    instructions: {
      order: number;
      produits: {
        quantite: number;
        ingredients: number;
      }[];
      description: string;
    }[];
  }>({
    title: '',
    UserId: 0,
    instructions: [
      {
        order: 0,
        produits: [
          {
            quantite: 0,
            ingredients: 0
          }
        ],
        description: ''
      }
    ]
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    if (name.includes('instructions')) {
      const [instructionName, index, subFieldName] = name.split('.');
      setRecipe(prevRecipe => ({
        ...prevRecipe,
        instructions: prevRecipe.instructions.map((instruction, i) => {
          if (i === Number(index)) {
            return {
              ...instruction,
              [subFieldName]: value
            };
          }
          return instruction;
        })
      }));
    } else if (name.includes('produits')) {
      const [instructionName, index, produitsName, produitsIndex, subFieldName] = name.split('.');
      setRecipe(prevRecipe => ({
        ...prevRecipe,
        instructions: prevRecipe.instructions.map((instruction, i) => {
          if (i === Number(index)) {
            return {
              ...instruction,
              produits: instruction.produits.map((produit, j) => {
                if (j === Number(produitsIndex)) {
                  return {
                    ...produit,
                    [subFieldName]: value
                  };
                }
                return produit;
              })
            };
          }
          return instruction;
        })
      }));
    } else {
      setRecipe(prevRecipe => ({
        ...prevRecipe,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      // Convertir la valeur de UserId en entier
  const userId = parseInt(recipe.UserId);

  // Vérifier si la conversion a réussi
  if (isNaN(userId)) {
    console.error('Invalid UserId');
    return;
  }

  // Créer un nouvel objet recipe avec la valeur convertie de UserId
  const newRecipe = {
    ...recipe,
    UserId: userId
  };
    // Effectuez ici la requête front-end avec la recette ajoutée
    await axios.post(`http://localhost:8000/nutrition`, newRecipe)
    console.log(recipe);
    setOpen(false);
  };

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        <div className="flex items-center gap-x-3">
          <HiPlus className="text-xl" />
          Add Recipe
        </div>
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen}>
        <Modal.Header className="border-b border-gray-200 !p-6 dark:border-gray-700">
          <strong>Add New Recipe</strong>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="title">Recipe Title</Label>
                <div className="mt-1">
                  <TextInput
                    id="title"
                    name="title"
                    value={recipe.title}
                    onChange={handleChange}
                    placeholder="Delicious Chocolate Cake"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="UserId">User ID</Label>
                <div className="mt-1">
                  <TextInput
                    id="UserId"
                    name="UserId"
                    value={recipe.UserId}
                    onChange={handleChange}
                    type="number"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="instructions.0.order">Order</Label>
                <div className="mt-1">
                  <TextInput
                    id="instructions.0.order"
                    name="instructions.0.order"
                    value={recipe.instructions[0].order}
                    onChange={handleChange}
                    type="number"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="instructions.0.description">Description</Label>
                <div className="mt-1">
                  <Textarea
                    id="instructions.0.description"
                    name="instructions.0.description"
                    value={recipe.instructions[0].description}
                    onChange={handleChange}
                    placeholder="Prepare the batter by mixing all the ingredients together. Bake in the oven for 30 minutes. Let it cool before serving."
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="instructions.0.produits.0.quantite">Quantity</Label>
                <div className="mt-1">
                  <TextInput
                    id="instructions.0.produits.0.quantite"
                    name="instructions.0.produits.0.quantite"
                    value={recipe.instructions[0].produits[0].quantite}
                    onChange={handleChange}
                    type="number"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="instructions.0.produits.0.ingredients">Ingredients</Label>
                <div className="mt-1">
                  <TextInput
                    id="instructions.0.produits.0.ingredients"
                    name="instructions.0.produits.0.ingredients"
                    value={recipe.instructions[0].produits[0].ingredients}
                    onChange={handleChange}
                    type="number"
                  />
                </div>
              </div>
            </div>
            <Modal.Footer>
              <Button color="primary" type="submit">
                Add Recipe
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};


const AllUsersTable: FC = function () {
  const [nutritions, setNutritions] = useState([])
  const [instructions, setInstructions] = useState([])

  useEffect(() => {
    const fetchNutritions = async () => {
      const getNutritions = await axios.get('http://localhost:8000/nutrition')
      console.log(getNutritions.data.data.nutrition);
      setNutritions(getNutritions.data.data.nutrition);

    }
    fetchNutritions()
  }, [])
  return (
    <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
      <Table.Head className="bg-gray-100 dark:bg-gray-700">
        <Table.HeadCell>
          <Label htmlFor="select-all" className="sr-only">
            Select all
          </Label>
          <Checkbox id="select-all" name="select-all" />
        </Table.HeadCell>
        <Table.HeadCell>Name</Table.HeadCell>
        {/* <Table.HeadCell>Author</Table.HeadCell> */}
        {/* <Table.HeadCell>Description</Table.HeadCell> */}
        {/* <Table.HeadCell>Status</Table.HeadCell>
        <Table.HeadCell>Actions</Table.HeadCell> */}
      </Table.Head>
      <Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
        {
          nutritions.map((nutrition, id) => (
            <Table.Row key={id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <Table.Cell className="w-4 p-4">
                <div className="flex items-center">
                  <Checkbox aria-describedby="checkbox-1" id="checkbox-1" />
                  <label htmlFor="checkbox-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </Table.Cell>
              <Table.Cell className="mr-12 flex items-center space-x-6 whitespace-nowrap p-4 lg:mr-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="/images/users/neil-sims.png"
                  alt="Neil Sims avatar"
                />
                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  <div className="text-base font-semibold text-gray-900 dark:text-white">
                    {nutrition.title}
                  </div>
                   <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                   {nutrition.UserId}
              </div> 
                </div>
              </Table.Cell>
              {/* <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                {nutrition.UserId}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                {
                  nutrition.instructions.map((details) => (
                    details.description
                  ))
                }
              </Table.Cell> */}
              {/* <Table.Cell className="whitespace-nowrap p-4 text-base font-normal text-gray-900 dark:text-white">
                <div className="flex items-center">
                  <div className="mr-2 h-2.5 w-2.5 rounded-full bg-green-400"></div>{" "}
                  Active
                </div>
              </Table.Cell> */}
              <Table.Cell>
                <div className="flex items-center gap-x-3 whitespace-nowrap">
                  <RecetteDetailModal nutrition={nutrition} />
                  <DeleteRecipeModal nutrition={nutrition} />
                </div>
              </Table.Cell>
            </Table.Row>
          ))
        }





      </Table.Body>
    </Table>
  )
}

const RecetteDetailModal: FC = function ({ nutrition }) {
  const [isOpen, setOpen] = useState(false);
  const [title, setTitle] = useState(nutrition.title);
  const [description, setDescription] = useState(nutrition.description);

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        <div className="flex items-center gap-x-2">
          <HiOutlinePencilAlt className="text-lg" />
          Details
        </div>
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen}>
        <Modal.Header className="border-b border-gray-200 !p-6 dark:border-gray-700">
          <strong>Details</strong>
        </Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="firstName">Name</Label>
              <div className="mt-1">
                 <TextInput
                  id="firstName"
                  name="firstName"
                  placeholder="Bonnie"
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                /> 
                
              </div>
            </div>
            <div>
              <Label htmlFor="lastName">Author</Label>
              <div className="mt-1">
                {/* <TextInput id="lastName" name="lastName" placeholder="Green"/> */}
                {nutrition.UserId}
              </div>
            </div>
            {/* <div>
              <Label htmlFor="email">Email</Label>
              <div className="mt-1">
                <TextInput
                  id="email"
                  name="email"
                  placeholder="example@company.com"
                  type="email"
                />
              </div>
            </div> */}

            {
              nutrition.instructions.map((details) => (

                <>

                  <div>
                    <Label htmlFor="email">Order</Label>
                    <div className="mt-1">
                      {/* <TextInput
                    id="email"
                    name="email"
                    placeholder="example@company.com"
                    type="email"
                  /> */}
                      {details.order}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Description</Label>
                    <div className="mt-1">
                      {/* <TextInput
                    id="email"
                    name="email"
                    placeholder="example@company.com"
                    type="email"
                  /> */}
                      {details.description}
                    </div>
                  </div>




                  {
                    details.produits.map((lastdetails) => (
                      <>
                        <div>
                          <Label htmlFor="email">Quantité(G)</Label>
                          <div className="mt-1">
                            {/* <TextInput
                          id="email"
                          name="email"
                          placeholder="example@company.com"
                          type="email"
                        /> */}
                            {lastdetails.quantite}
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="email">Ingredients</Label>
                          <div className="mt-1">
                            {/* <TextInput
                          id="email"
                          name="email"
                          placeholder="example@company.com"
                          type="email"
                        /> */}
                            {lastdetails.ingredients}
                          </div>
                        </div>
                      </>
                    ))
                  }

                </>

              ))
            }

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="primary" onClick={() => setOpen(false)}>
            Save all
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};


const DeleteRecipeModal: FC = function ({nutrition}) {
  const [isOpen, setOpen] = useState(false);

  const handleDelete = () => {
    // Mettez ici votre logique d'envoi des données au backend, par exemple avec axios
    axios
      .delete(`http://localhost:8000/nutrition/${nutrition.id}`)
      .then((response) => {
        // Gérez la réponse du backend si nécessaire
        console.log(response.data);
        // Fermez le modal après la modification
        setOpen(false);
      })
      .catch((error) => {
        // Gérez les erreurs de requête si nécessaire
        console.error(error);
      });
  };

  return (
    <>
      <Button color="failure" onClick={() => setOpen(true)}>
        <div className="flex items-center gap-x-2">
          <HiTrash className="text-lg" />
          Delete user
        </div>
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen} size="md">
        <Modal.Header className="px-6 pt-6 pb-0">
          <span className="sr-only">Delete user</span>
        </Modal.Header>
        <Modal.Body className="px-6 pt-0 pb-6">
          <div className="flex flex-col items-center gap-y-6 text-center">
            <HiOutlineExclamationCircle className="text-7xl text-red-500" />
            <p className="text-xl text-gray-500">
              Are you sure you want to delete this user?
            </p>
            <div className="flex items-center gap-x-3">
              <Button color="failure" onClick={handleDelete}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setOpen(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NutritionPage;