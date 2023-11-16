import React, { createContext, useState, useMemo, useCallback, useContext } from 'react'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import { v4 as uuidv4 } from 'uuid'
import { Mood } from '@/types/mood'
import { useDidMount } from 'rooks'

const DataContext = createContext<DataContextValue | null>(null)

export const useDataContext = (): DataContextValue => {
    return useContext(DataContext)
}

export const DataContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [showModal, setShowModal] = useState(false)
    const [mood, setMood] = useState<MoodRecord[]>([])
    const [activeIndex, setActiveIndex] = useState(0)

    const router = useRouter()

    useDidMount(() => {
        router.query = null
        router.push(router)
    })

    const updateMood = useCallback((newMood: Mood) => {
        const now = new Date()
        const formattedDate = format(now, "EEEE, MMM d 'at' h:mma")
        const newMoodObj = {
            mood: newMood,
            date: formattedDate,
            id: uuidv4(),
        }

        setMood((prevMood) => [newMoodObj, ...prevMood])
        router.query.mood = newMood
        router.push(router)
        setActiveIndex(0)
    }, [router])

    const handleActiveIndex = useCallback((index: number) => {
        setActiveIndex(index)
        router.query.mood = mood[index].mood
        router.push(router)
    }, [mood, router])

    // Memoize the context value to prevent the provider from unnecessarily
    const memorizedContextValue = useMemo(() => {
        return {
            showModal,
            handleShowModal: () => setShowModal(true),
            handleCloseModal: () => setShowModal(false),
            mood,
            updateMood,
            activeIndex,
            handleActiveIndex,
        }
    }, [activeIndex, handleActiveIndex, mood, showModal, updateMood])

    return (
        <DataContext.Provider value={memorizedContextValue}>
            {children}
        </DataContext.Provider>
    )
}

type DataContextValue = {
    showModal: boolean
    handleShowModal: () => void
    handleCloseModal: () => void
    mood: MoodRecord[]
    updateMood: (newMood: Mood) => void
    activeIndex: number
    handleActiveIndex: (index: number) => void
}

export type MoodRecord = {
    mood: Mood
    date: string
    id: string
}