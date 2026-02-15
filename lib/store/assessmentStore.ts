import { create } from 'zustand';

export type AssessmentStep = 'intro' | 'upload' | 'concerns' | 'scans' | 'contact' | 'analyzing' | 'results';

export type PhotoView = 'front_smile' | 'front_teeth' | 'left' | 'right' | 'upper' | 'lower';

export interface PhotoData {
    id: PhotoView;
    file: File | null;
    previewUrl: string | null;
}

export interface DentalSituation {
    hasBiteIssue: boolean;
    hasMissingTeeth: boolean;
    hasGumIssue: boolean;
    wantsColorChange: boolean;
}

export interface AssessmentState {
    currentStep: AssessmentStep;
    photos: Record<PhotoView, PhotoData>;
    concerns: string[];
    dentalSituation: DentalSituation;
    situationDescription: string;
    hasScans: boolean | null;
    scanFiles: { file: File, previewUrl: string }[];
    contactInfo: { name: string, email: string, phone: string };
    leadId: string | null;
    diagnosis: Record<string, unknown> | null;

    // Actions
    setStep: (step: AssessmentStep) => void;
    setPhoto: (view: PhotoView, file: File) => void;
    removePhoto: (view: PhotoView) => void;
    toggleConcern: (concern: string) => void;
    setDentalSituation: (situation: Partial<DentalSituation>) => void;
    setSituationDescription: (val: string) => void;
    setHasScans: (val: boolean | null) => void;
    addScanFile: (file: File) => void;
    removeScanFile: (index: number) => void;
    setContactInfo: (info: Partial<AssessmentState['contactInfo']>) => void;
    setLeadId: (id: string) => void;
    setDiagnosis: (data: Record<string, unknown>) => void;
    reset: () => void;
}

const initialPhotos: Record<PhotoView, PhotoData> = {
    front_smile: { id: 'front_smile', file: null, previewUrl: null },
    front_teeth: { id: 'front_teeth', file: null, previewUrl: null },
    left: { id: 'left', file: null, previewUrl: null },
    right: { id: 'right', file: null, previewUrl: null },
    upper: { id: 'upper', file: null, previewUrl: null },
    lower: { id: 'lower', file: null, previewUrl: null },
};

const initialDentalSituation: DentalSituation = {
    hasBiteIssue: false,
    hasMissingTeeth: false,
    hasGumIssue: false,
    wantsColorChange: false,
};

export const useAssessmentStore = create<AssessmentState>((set) => ({
    currentStep: 'intro',
    photos: { ...initialPhotos },
    concerns: [],
    dentalSituation: { ...initialDentalSituation },
    situationDescription: '',
    hasScans: null,
    scanFiles: [],
    contactInfo: { name: '', email: '', phone: '' },
    leadId: null,
    diagnosis: null,

    setStep: (step) => set({ currentStep: step }),

    setLeadId: (id) => set({ leadId: id }),

    setPhoto: (view, file) => set((state) => {
        // Revoke old object URL if exists
        if (state.photos[view].previewUrl) {
            URL.revokeObjectURL(state.photos[view].previewUrl!);
        }
        return {
            photos: {
                ...state.photos,
                [view]: {
                    id: view,
                    file: file,
                    previewUrl: URL.createObjectURL(file),
                },
            },
        };
    }),

    removePhoto: (view) => set((state) => {
        if (state.photos[view].previewUrl) {
            URL.revokeObjectURL(state.photos[view].previewUrl!);
        }
        return {
            photos: {
                ...state.photos,
                [view]: { id: view, file: null, previewUrl: null },
            },
        };
    }),

    toggleConcern: (concern) => set((state) => {
        const exists = state.concerns.includes(concern);
        return {
            concerns: exists
                ? state.concerns.filter((c) => c !== concern)
                : [...state.concerns, concern],
        };
    }),

    setDentalSituation: (situation) => set((state) => ({
        dentalSituation: { ...state.dentalSituation, ...situation },
    })),

    setSituationDescription: (val) => set({ situationDescription: val }),

    setHasScans: (val) => set({ hasScans: val }),

    addScanFile: (file) => set((state) => ({
        scanFiles: [...state.scanFiles, { file, previewUrl: URL.createObjectURL(file) }]
    })),

    removeScanFile: (index) => set((state) => {
        const fileToRemove = state.scanFiles[index];
        if (fileToRemove.previewUrl) {
            URL.revokeObjectURL(fileToRemove.previewUrl);
        }
        return {
            scanFiles: state.scanFiles.filter((_, i) => i !== index)
        };
    }),

    setContactInfo: (info) => set((state) => ({
        contactInfo: { ...state.contactInfo, ...info }
    })),

    setDiagnosis: (data) => set({ diagnosis: data }),

    reset: () => set((state) => {
        // Revoke all scan objects URLs
        state.scanFiles.forEach(f => URL.revokeObjectURL(f.previewUrl));
        // Revoke all photo objects URLs
        Object.values(state.photos).forEach(p => {
            if (p.previewUrl) URL.revokeObjectURL(p.previewUrl);
        });

        return {
            currentStep: 'intro',
            photos: { ...initialPhotos },
            concerns: [],
            dentalSituation: { ...initialDentalSituation },
            situationDescription: '',
            hasScans: null,
            scanFiles: [],
            contactInfo: { name: '', email: '', phone: '' },
            leadId: null,
            diagnosis: null,
        };
    }),
}));

// Backwards compatibility - expose 'front' as alias to 'front_smile'
// This helps existing components that use 'photos.front.previewUrl'
