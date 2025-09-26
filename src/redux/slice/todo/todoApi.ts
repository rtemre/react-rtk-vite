import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Todo } from "../../../components/Todo/types";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  tagTypes: ["GetAllTodo"],
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => "/todos",
      transformResponse: (response: { todos: Todo[] }) => response.todos,
      providesTags: ["GetAllTodo"],
      keepUnusedDataFor: 5, // seconds
    }),
    getTodo: builder.query({
      query: (id: number) => `/todos/${id}`,
      transformResponse: (response: Todo) => response,
    }),
    addTodo: builder.mutation({
      query: (newTodo: Partial<Todo>) => ({
        url: "/todos/add",
        method: "POST",
        body: newTodo,
      }),
      invalidatesTags: ["GetAllTodo"],
    }),
    deleteTodo: builder.mutation({
      query: (id: number) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
        const patchResult = dispatch(
          todoApi.util.updateQueryData("getAllTodos", {}, (draft) => {
            // Find index of todo to remove
            const index = draft.findIndex((todo) => todo.id === id);
            if (index !== -1) {
              draft.splice(index, 1);
            }
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetAllTodosQuery,
  useLazyGetTodoQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
