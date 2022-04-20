import React, { useState } from "react";
import { projectFireStore } from "../firebase";

export default function useFirestore() {
  const [isLoading, setIsLoading] = useState(false);

  const getCollection = async (path) => {
    projectFireStore.collection(path);
  };
  const addDoc = async (path, data) => {
    projectFireStore.collection(path).add(data);
  };

  const editDoc = async (path, data) => {
    const { id, ...param } = data;
    projectFireStore.collection(path).doc(data.id).update(data);
  };

  const deleteDoc = async (path, data) => {
    const { id, ...param } = data;
    projectFireStore.collection(path).doc().delete(id);
  };

  return { getCollection, addDoc, editDoc, deleteDoc };
}
