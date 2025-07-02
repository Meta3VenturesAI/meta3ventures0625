// Image optimization and fallback utilities
export const imageConfig = {
  // Reliable image sources with proper URLs
  fallbackImages: {
    hero: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200',
    team: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    blog: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technology: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    business: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  
  // Partner logos - using SVG data URLs for reliability
  partnerLogos: {
    'HubSpot for Startups': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDAgNDBDNDAgMzUuNTgxNyA0My41ODE3IDMyIDQ4IDMySDUyQzU2LjQxODMgMzIgNjAgMzUuNTgxNyA2MCA0MEg0MFoiIGZpbGw9IiNGRjdBNTkiLz4KPHBhdGggZD0iTTQwIDQwQzQwIDQ0LjQxODMgNDMuNTgxNyA0OCA0OCA0OEg1MkM1Ni40MTgzIDQ4IDYwIDQ0LjQxODMgNjAgNDBINDBaIiBmaWxsPSIjMDBCRkI1Ii8+CjxwYXRoIGQ9Ik02MCA0MEM2MCA0NC40MTgzIDU2LjQxODMgNDggNTIgNDhINDhDNDMuNTgxNyA0OCA0MCA0NC40MTgzIDQwIDQwSDYwWiIgZmlsbD0iI0ZGN0E1OSIvPgo8cGF0aCBkPSJNNjAgNDBDNjAgMzUuNTgxNyA1Ni40MTgzIDMyIDUyIDMySDE1MEM1NC40MTgzIDMyIDYwIDM1LjU4MTcgNjAgNDBINjBaIiBmaWxsPSIjMDBCRkI1Ii8+Cjx0ZXh0IHg9IjgwIiB5PSI0OCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzMzMyI+SHViU3BvdDwvdGV4dD4KPC9zdmc+',
    'NVIDIA Inception': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDAgMjBMNTAgMzBMNjAgMjBMNTAgMTBMNDAgMjBaIiBmaWxsPSIjNzZCOTAwIi8+CjxwYXRoIGQ9Ik0zMCAzMEw0MCA0MEw1MCAzMEw0MCAyMEwzMCAzMFoiIGZpbGw9IiM3NkI5MDAiLz4KPHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI4MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzMzMiPk5WSURJQSBJbmNlcHRpb248L3RleHQ+Cjwvc3ZnPg==',
    'Google for Startups': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSIxNSIgZmlsbD0iI0VBNDMzNSIvPgo8Y2lyY2xlIGN4PSI2MCIgY3k9IjQwIiByPSIxNSIgZmlsbD0iIzQyODVGNCIvPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjI1IiByPSIxNSIgZmlsbD0iI0ZCQkMwNSIvPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjU1IiByPSIxNSIgZmlsbD0iIzM0QTg1MyIvPgo8dGV4dCB4PSI4MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzMzMiPkdvb2dsZSBmb3IgU3RhcnR1cHM8L3RleHQ+Cjwvc3ZnPg==',
    'Microsoft for Startups': '/logos/Microsoft-for-Startups.jpg',
    'Oracle for Startups': '/logos/oracle-for-startups.png',
    'AWS Startups': '/logos/amazon.jpg',
    'EY': '/logos/EYLogo.gif',
    'PwC': '/logos/PwC_2025_Logo.svg.png',
    'Start-up Nation Central': '/logos/SNC.png',
    'Nielsen': '/logos/Nielsen_New_Logo_2021.png',
    'Atlassian': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDAgMjBMNTAgNDBMNjAgMjBMNTAgMzBMNDAgMjBaIiBmaWxsPSIjMDA1MkNDIi8+CjxwYXRoIGQ9Ik00MCA2MEw1MCA0MEw2MCA2MEw1MCA1MEw0MCA2MFoiIGZpbGw9IiMyNjg0RkYiLz4KPHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI4MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzMzMiPkF0bGFzc2lhbjwvdGV4dD4KPC9zdmc+',
    'Slack': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzUgMzBDMzIuMjM4NiAzMCAzMCAzMi4yMzg2IDMwIDM1QzMwIDM3Ljc2MTQgMzIuMjM4NiA0MCAzNSA0MEMzNy43NjE0IDQwIDQwIDM3Ljc2MTQgNDAgMzVWMzBIMzVaIiBmaWxsPSIjRTAxRTVBIi8+CjxwYXRoIGQ9Ik0zNSA0NUMzNy43NjE0IDQ1IDQwIDQyLjc2MTQgNDAgNDBDNDAgMzcuMjM4NiAzNy43NjE0IDM1IDM1IDM1QzMyLjIzODYgMzUgMzAgMzcuMjM4NiAzMCA0MEgzNVY0NVoiIGZpbGw9IiMzNkM1RjAiLz4KPHBhdGggZD0iTTQ1IDQ1QzQ3Ljc2MTQgNDUgNTAgNDIuNzYxNCA1MCA0MEM1MCAzNy4yMzg2IDQ3Ljc2MTQgMzUgNDUgMzVINDBWNDBDNDAgNDIuNzYxNCA0Mi4yMzg2IDQ1IDQ1IDQ1WiIgZmlsbD0iIzJFQjY3RCIvPgo8cGF0aCBkPSJNNDUgMzBDNDcuNzYxNCAzMCA1MCAzMi4yMzg2IDUwIDM1QzUwIDM3Ljc2MTQgNDcuNzYxNCA0MCA0NSA0MEM0Mi4yMzg2IDQwIDQwIDM3Ljc2MTQgNDAgMzVWMzBINDVaIiBmaWxsPSIjRUNCMjJFIi8+Cjx0ZXh0IHg9IjgwIiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzMzMyI+U2xhY2s8L3RleHQ+Cjwvc3ZnPg==',
    'Zoom': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzAgMzBINTBWNTBIMzBWMzBaIiBmaWxsPSIjMjQ4NkNDIi8+CjxwYXRoIGQ9Ik01MCA1MEw3MCAzMFY1MEg1MFoiIGZpbGw9IiMyNDg2Q0MiLz4KPHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI4MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzMzMiPlpvb208L3RleHQ+Cjwvc3ZnPg==',
    'Notion': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzAgMzBINTBWNTBIMzBWMzBaIiBmaWxsPSIjMDAwMDAwIi8+CjxwYXRoIGQ9Ik01MCAzMEg3MFY1MEg1MFYzMFoiIGZpbGw9IiMwMDAwMDAiLz4KPHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI4MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzMzMiPk5vdGlvbjwvdGV4dD4KPC9zdmc+',
    'Figma': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDAgMjBINTBDNTUuNTIyOSAyMCA2MCAyNC40NzcxIDYwIDMwQzYwIDM1LjUyMjkgNTUuNTIyOSA0MCA1MCA0MEg0MFYyMFoiIGZpbGw9IiNGMjRFMUUiLz4KPHBhdGggZD0iTTQwIDQwSDUwQzU1LjUyMjkgNDAgNjAgNDQuNDc3MSA2MCA1MEM2MCA1NS41MjI5IDU1LjUyMjkgNjAgNTAgNjBINDBWNDBaIiBmaWxsPSIjMDlDRjgzIi8+CjxwYXRoIGQ9Ik00MCAyMEgzMEMyNC40NzcxIDIwIDIwIDI0LjQ3NzEgMjAgMzBDMjAgMzUuNTIyOSAyNC40NzcxIDQwIDMwIDQwSDQwVjIwWiIgZmlsbD0iI0E1NTlGRiIvPgo8cGF0aCBkPSJNNDAgNjBINTBDNTUuNTIyOSA2MCA2MCA1NS41MjI5IDYwIDUwQzYwIDQ0LjQ3NzEgNTUuNTIyOSA0MCA1MCA0MEg0MFY2MFoiIGZpbGw9IiNGMjRFMUUiLz4KPHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI4MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzMzMiPkZpZ21hPC90ZXh0Pgo8L3N2Zz4=',
    'Databricks': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDAgMjBMNTAgMzBMNjAgMjBMNTAgMTBMNDAgMjBaIiBmaWxsPSIjRkY0NTAwIi8+CjxwYXRoIGQ9Ik0zMCAzMEw0MCA0MEw1MCAzMEw0MCAyMEwzMCAzMFoiIGZpbGw9IiNGRjQ1MDAiLz4KPHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI4MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzMzMiPkRhdGFicmlja3M8L3RleHQ+Cjwvc3ZnPg==',
    'MongoDB': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDUgMjBDNDUgMjAgNTAgMTUgNTUgMjBDNTUgMjAgNjAgMjUgNTUgMzBDNTUgMzAgNTAgMzUgNDUgMzBDNDUgMzAgNDAgMjUgNDUgMjBaIiBmaWxsPSIjNDdBMjQ4Ii8+CjxwYXRoIGQ9Ik00NSA0MEM0NSA0MCA1MCAzNSA1NSA0MEM1NSA0MCA2MCA0NSA1NSA1MEM1NSA1MCA1MCA1NSA0NSA1MEM0NSA1MCA0MCA0NSA0NSA0MFoiIGZpbGw9IiM0N0EyNDgiLz4KPHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI4MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzMzMiPk1vbmdvREI8L3RleHQ+Cjwvc3ZnPg==',
    'Snowflake': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDAgMjBMNTAgMzBMNjAgMjBMNTAgMTBMNDAgMjBaIiBmaWxsPSIjMjlCNkY2Ii8+CjxwYXRoIGQ9Ik0zMCAzMEw0MCA0MEw1MCAzMEw0MCAyMEwzMCAzMFoiIGZpbGw9IiMyOUI2RjYiLz4KPHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI4MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzMzMiPlNub3dmbGFrZTwvdGV4dD4KPC9zdmc+',
    'Stripe': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNTQuNSAzNi41QzU0LjUgMzMuNSA1Ni41IDMxLjUgNjAuNSAzMS41QzY2LjUgMzEuNSA3MC41IDM0LjUgNzAuNSAzOC41VjQ4LjVINjQuNVYzOS41QzY0LjUgMzcuNSA2My41IDM2LjUgNjEuNSAzNi41QzU5LjUgMzYuNSA1OC41IDM3LjUgNTguNSAzOS41VjQ4LjVINTIuNVYzOS41QzUyLjUgMzcuNSA1MS41IDM2LjUgNDkuNSAzNi41QzQ3LjUgMzYuNSA0Ni41IDM3LjUgNDYuNSAzOS41VjQ4LjVINDAuNVYzMi41SDQ2LjVWMzQuNUM0Ny41IDMzIDQ5IDMxLjUgNTEuNSAzMS41QzUzIDMxLjUgNTQuNSAzMy41IDU0LjUgMzYuNVoiIGZpbGw9IiM2NzVCRkYiLz4KPHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI4MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzMzMiPlN0cmlwZTwvdGV4dD4KPC9zdmc+',
    'Salesforce': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSIxMiIgZmlsbD0iIzAwQTFGRiIvPgo8Y2lyY2xlIGN4PSI2MCIgY3k9IjMwIiByPSI4IiBmaWxsPSIjMDBBMUZGIi8+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjYiIGZpbGw9IiMwMEExRkYiLz4KPHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI4MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzMzMiPlNhbGVzZm9yY2U8L3RleHQ+Cjwvc3ZnPg=='
  },
  
  // Optimized image URLs for different use cases
  optimizedUrls: {
    // Team/About images
    lironLanger: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAABQACAwQGAQf/xAAsEAACAQMDAgUEAwEAAAAAAAABAgMABBEFEiExQVEGEyJhcTKBkaGx0eHw/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAIhEAAgICAgICAwAAAAAAAAAAAAECEQMhEjFBUWFxgZGh/9oADAMBAAIRAxEAPwDuKKKKACiiigAooooAKKKKACiiigAooooA',
    teamCollaboration: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjIwMCIgcj0iODAiIGZpbGw9IiM2MzY2RjEiLz4KPGNpcmNsZSBjeD0iNDAwIiBjeT0iMjAwIiByPSI4MCIgZmlsbD0iIzgxODRGMyIvPgo8Y2lyY2xlIGN4PSI2MDAiIGN5PSIyMDAiIHI9IjgwIiBmaWxsPSIjQTVBN0Y3Ii8+CjxwYXRoIGQ9Ik0xNTAgNDAwSDY1MFY1MDBIMTUwVjQwMFoiIGZpbGw9IiNFMkUzRjMiLz4KPHBhdGggZD0iTTIwMCAzMDBWNDAwIiBzdHJva2U9IiM2MzY2RjEiIHN0cm9rZS13aWR0aD0iMTAiLz4KPHBhdGggZD0iTTQwMCAzMDBWNDAwIiBzdHJva2U9IiM4MTg0RjMiIHN0cm9rZS13aWR0aD0iMTAiLz4KPHBhdGggZD0iTTYwMCAzMDBWNDAwIiBzdHJva2U9IiNBNUE3RjciIHN0cm9rZS13aWR0aD0iMTAiLz4KPHRleHQgeD0iNDAwIiB5PSI0NTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzMzMzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VGVhbSBDb2xsYWJvcmF0aW9uPC90ZXh0Pgo8L3N2Zz4=',
    
    // Blog images
    aiFuture: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjQwMCIgY3k9IjMwMCIgcj0iMTUwIiBmaWxsPSIjNjM2NkYxIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8Y2lyY2xlIGN4PSI0MDAiIGN5PSIzMDAiIHI9IjEwMCIgZmlsbD0iIzYzNjZGMSIgZmlsbC1vcGFjaXR5PSIwLjQiLz4KPGNpcmNsZSBjeD0iNDAwIiBjeT0iMzAwIiByPSI1MCIgZmlsbD0iIzYzNjZGMSIvPgo8cGF0aCBkPSJNMzUwIDIwMEw0NTAgMjAwIiBzdHJva2U9IiM2MzY2RjEiIHN0cm9rZS13aWR0aD0iMTAiLz4KPHBhdGggZD0iTTM1MCA0MDBMNDU0IDQwMCIgc3Ryb2tlPSIjNjM2NkYxIiBzdHJva2Utd2lkdGg9IjEwIi8+CjxwYXRoIGQ9Ik0zMDAgMjUwTDMwMCAzNTAiIHN0cm9rZT0iIzYzNjZGMSIgc3Ryb2tlLXdpZHRoPSIxMCIvPgo8cGF0aCBkPSJNNTAwIDI1MEw1MDAgMzUwIiBzdHJva2U9IiM2MzY2RjEiIHN0cm9rZS13aWR0aD0iMTAiLz4KPHRleHQgeD0iNDAwIiB5PSI1MDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzMzMzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QUkgSW5ub3ZhdGlvbjwvdGV4dD4KPC9zdmc+',
    blockchain: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMjAwSDMwMFYzMDBIMjAwVjIwMFoiIGZpbGw9IiM2MzY2RjEiLz4KPHBhdGggZD0iTTM1MCAyMDBINDUwVjMwMEgzNTBWMjAwWiIgZmlsbD0iIzYzNjZGMSIvPgo8cGF0aCBkPSJNNTAwIDIwMEg2MDBWMzAwSDUwMFYyMDBaIiBmaWxsPSIjNjM2NkYxIi8+CjxwYXRoIGQ9Ik0yMDAgMzUwSDMwMFY0NTBIMjAwVjM1MFoiIGZpbGw9IiM2MzY2RjEiLz4KPHBhdGggZD0iTTM1MCAzNTBINDUwVjQ1MEgzNTBWMzUwWiIgZmlsbD0iIzYzNjZGMSIvPgo8cGF0aCBkPSJNNTAwIDM1MEg2MDBWNDUwSDUwMFYzNTBaIiBmaWxsPSIjNjM2NkYxIi8+CjxwYXRoIGQ9Ik0zMDAgMjUwSDM1MFYzMDBIMzAwVjI1MFoiIGZpbGw9IiM2MzY2RjEiLz4KPHBhdGggZD0iTTQ1MCAyNTBINTAwVjMwMEg0NTBWMjUwWiIgZmlsbD0iIzYzNjZGMSIvPgo8cGF0aCBkPSJNMzAwIDQwMEgzNTBWNDUwSDMwMFY0MDBaIiBmaWxsPSIjNjM2NkYxIi8+CjxwYXRoIGQ9Ik00NTAgNDAwSDUwMFY0NTBINDUwVjQwMFoiIGZpbGw9IiM2MzY2RjEiLz4KPHRleHQgeD0iNDAwIiB5PSI1MDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzMzMzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QmxvY2tjaGFpbiBUZWNobm9sb2d5PC90ZXh0Pgo8L3N2Zz4=',
    ventureCapital: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMjAwSDI1MFY0NTBIMjAwVjIwMFoiIGZpbGw9IiM2MzY2RjEiLz4KPHBhdGggZD0iTTMwMCAyNTBIMzUwVjQ1MEgzMDBWMjUwWiIgZmlsbD0iIzYzNjZGMSIvPgo8cGF0aCBkPSJNNDAwIDMwMEg0NTBWNDUwSDQwMFYzMDBaIiBmaWxsPSIjNjM2NkYxIi8+CjxwYXRoIGQ9Ik01MDAgMTUwSDU1MFY0NTBINTAwVjE1MFoiIGZpbGw9IiM2MzY2RjEiLz4KPHBhdGggZD0iTTYwMCAzNTBINjUwVjQ1MEg2MDBWMzUwWiIgZmlsbD0iIzYzNjZGMSIvPgo8cGF0aCBkPSJNMTUwIDQ1MEg3MDBWNTA1SDE1MFY0NTBaIiBmaWxsPSIjNjM2NkYxIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iNTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiMzMzMzMzMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlZlbnR1cmUgQ2FwaXRhbDwvdGV4dD4KPC9zdmc+'
  }
};

// Check if an image exists
export const checkImageExists = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

// Get optimized image URL with fallback
export const getOptimizedImageUrl = (
  originalUrl: string, 
  width: number = 800, 
  height?: number,
  quality: number = 80
): string => {
  try {
    // For Pexels images, add optimization parameters
    if (originalUrl.includes('pexels.com')) {
      const url = new URL(originalUrl);
      url.searchParams.set('auto', 'compress');
      url.searchParams.set('cs', 'tinysrgb');
      url.searchParams.set('w', width.toString());
      if (height) {
        url.searchParams.set('h', height.toString());
        url.searchParams.set('fit', 'crop');
      }
      url.searchParams.set('q', quality.toString());
      return url.toString();
    }
    
    // For Cloudinary images, add optimization
    if (originalUrl.includes('cloudinary.com')) {
      return originalUrl.replace('/upload/', `/upload/c_fill,w_${width}${height ? `,h_${height}` : ''},q_auto,f_auto/`);
    }
    
    // For other images, return as-is
    return originalUrl;
  } catch (error) {
    console.warn('Failed to optimize image URL:', error);
    return originalUrl;
  }
};

// Get fallback image for specific content type
export const getFallbackImage = (type: 'hero' | 'team' | 'blog' | 'technology' | 'business' = 'blog'): string => {
  return imageConfig.fallbackImages[type];
};

// Validate image URL
export const isValidImageUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif'];
    const hasValidExtension = validExtensions.some(ext => 
      urlObj.pathname.toLowerCase().includes(ext)
    );
    
    // Check for known image hosting domains
    const validDomains = [
      'pexels.com',
      'cloudinary.com',
      'wikimedia.org',
      'unsplash.com',
      'pixabay.com'
    ];
    
    const hasValidDomain = validDomains.some(domain => 
      urlObj.hostname.includes(domain)
    );
    
    return hasValidExtension || hasValidDomain;
  } catch {
    return false;
  }
};

// Get partner logo by name
export const getPartnerLogo = (partnerName: string): string => {
  // First try to get from the partnerLogos map
  if (imageConfig.partnerLogos[partnerName]) {
    return imageConfig.partnerLogos[partnerName];
  }
  
  // If not found, return a fallback image
  return imageConfig.fallbackImages.business;
};

// Preload critical images
export const preloadCriticalImages = (): void => {
  const criticalImages = [
    imageConfig.optimizedUrls.lironLanger,
    imageConfig.optimizedUrls.teamCollaboration,
    imageConfig.fallbackImages.hero
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Image loading with retry logic
export const loadImageWithRetry = (
  src: string, 
  retries: number = 2
): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    const attemptLoad = (attemptsLeft: number) => {
      img.onload = () => resolve(img);
      img.onerror = () => {
        if (attemptsLeft > 0) {
          setTimeout(() => attemptLoad(attemptsLeft - 1), 1000);
        } else {
          reject(new Error(`Failed to load image: ${src}`));
        }
      };
      img.src = src;
    };
    
    attemptLoad(retries);
  });
};

// Debug function to check all images in the public folder
export const debugCheckAllImages = async () => {
  const imagesToCheck = [
    // Partner logos
    '/logos/hubspot-for-startups.png',
    '/logos/nvidia-inception.png',
    '/logos/google-for-startups.png',
    '/logos/Microsoft-for-Startups.jpg',
    '/logos/oracle-for-startups.png',
    '/logos/amazon.jpg',
    '/logos/EYLogo.gif',
    '/logos/PwC_2025_Logo.svg.png',
    '/logos/SNC.png',
    '/logos/Nielsen_New_Logo_2021.png',
    '/logos/atlassian-logo.png',
    '/logos/slack-logo.png',
    '/logos/zoom-logo.png',
    '/logos/notion-logo.png',
    '/logos/figma-logo.png',
    '/logos/databricks-logo.png',
    '/logos/mongodb-logo.png',
    '/logos/snowflake-logo.png',
    '/logos/stripe-logo.png',
    '/logos/salesforce-logo.png',
    
    // Team images
    '/images/liron-langer.jpg',
    '/images/team-collaboration.jpg',
    
    // Blog images
    '/images/innovation.jpg',
    '/images/blockchain-tech.jpg',
    '/images/venture-capital.jpg'
  ];
  
  const results = await Promise.all(
    imagesToCheck.map(async (path) => {
      const exists = await checkImageExists(path);
      return { path, exists };
    })
  );
  
  console.log('Image check results:', results);
  return results;
};

// Create image elements for all images to force browser to load and cache them
export const preloadAllImages = () => {
  const allImagePaths = [
    ...Object.values(imageConfig.fallbackImages),
    ...Object.values(imageConfig.partnerLogos),
    ...Object.values(imageConfig.optimizedUrls)
  ];
  
  allImagePaths.forEach(path => {
    const img = new Image();
    img.src = path;
  });
};